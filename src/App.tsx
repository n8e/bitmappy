import { useState } from 'react';
import { Nav, Page } from './components/index.ts';
import { types, fileUtil } from './utils/index.ts';

import './App.css';

const App = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [files, setFiles] = useState<types.IFile[]>(fileUtil.getFiles());
  const [selectedFile, setSelectedFile] = useState<types.IFile>();

  return (
    <div className='container'>
      <Nav
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        files={files}
        setSelectedFile={setSelectedFile}
      />

      <Page
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        setFiles={setFiles}
        style={{ marginLeft: navOpen ? '250px' : '0' }}
      />
    </div>
  )
}

export default App;
