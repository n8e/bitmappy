import { types } from '../../utils';

import './modal.css';

type SaveModalProps = {
  showSaveModal: boolean;
  setShowSaveModal: (arg: boolean) => void;
  file: types.IFile;
  setFile: (arg: types.IFile) => void;
  saveFile: () => void;
}

export const SaveModal = ({ showSaveModal, setShowSaveModal, file, setFile, saveFile }: SaveModalProps) => {
  return (
    <div id="myModal" className="save-modal" style={{ display: showSaveModal ? 'block' : 'none' }}>
      <div className="save-modal-content">
        <div className='modal-close-button-wrapper'>
          <button id="modal-close-button" onClick={() => setShowSaveModal(false)}>&times;</button>
        </div>
        
        <div className='name-input-wrapper'>
          <label htmlFor="file_name">Name:</label>
          <input
            type='text'
            id="file_name"
            value={file.name}
            onChange={(e) => setFile({ ...file, name: e.target.value })}
          />
        </div>

        <button className="openbtn" onClick={saveFile} style={{ width: '14%', left: '0' }}>Save</button>
      </div>
    </div>
  );
};
