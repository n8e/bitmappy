import { useEffect, useState } from 'react';

import { fileUtil, types } from '../../utils';
import { Grid } from '../grid';
import { SaveModal } from './SaveModal';

import './index.css';

type PageProps = {
  navOpen: boolean;
  setNavOpen: (arg: boolean) => void;
  selectedFile?: types.IFile;
  setSelectedFile: (arg: types.IFile) => void;
  setFiles: (arg: types.IFile[]) => void;
  style?: object;
}

export const Page = ({
  navOpen,
  setNavOpen,
  selectedFile,
  setSelectedFile,
  setFiles,
  style
}: PageProps) => {
  const [showSaveModal, setShowSaveModal] = useState<boolean>(false);
  const [file, setFile] = useState<types.IFile>({
    id: '',
    name: '',
    data: []
  });

  useEffect(() => {
    if (selectedFile) {
      setFile(selectedFile)
    }
  }, [selectedFile]);

  const toggleNavOpen = () => setNavOpen(!navOpen);
  const generateFile = () => setSelectedFile(fileUtil.generateRandomFile());
  const createNew = () => setSelectedFile(fileUtil.createNewFile());
  const saveFile = () => {
    fileUtil.saveFile(file);
    setShowSaveModal(false);
    setFiles(fileUtil.getFiles());
  };
  const manageSave = () => {
    // isFileSaved ? replace storage copy with current copy : open dialog to enter name
    const isFileSaved = Boolean(file.id);

    if (isFileSaved) {
      saveFile();
    } else {
      setShowSaveModal(true);
    }
  }

  return (
    <div className='page' style={{ ...style }}>
      <div className='page-header'>
        <button className="openbtn" onClick={toggleNavOpen} style={{ width: '14%' }}>
          ☰ Open Files
        </button>
        <span>{file && file.name ? `./${file.name}.bmp` : null}</span>
        <button className="openbtn" onClick={createNew} style={{ width: '14%' }}>
          New
        </button>
        <button className="openbtn" onClick={generateFile} style={{ width: '14%' }}>
          Generate
        </button>
        <button className="openbtn" onClick={manageSave} style={{ width: '14%' }} disabled={!selectedFile}>
          Save
        </button>
      </div>
      
      {/*display selectedFile if present*/}
      <Grid
        data={selectedFile?.data}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />

      <SaveModal
        showSaveModal={showSaveModal}
        setShowSaveModal={setShowSaveModal}
        file={file}
        setFile={setFile}
        saveFile={saveFile}
      />

    </div>
  );
}
