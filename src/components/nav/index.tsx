import { types } from '../../utils';

import './index.css';

type NavProps = {
    navOpen: boolean;
    setNavOpen: (arg: boolean) => void;
    setSelectedFile: (args: types.IFile) => void;
    files?: types.IFile[];
  }

export const Nav = ({ navOpen, setNavOpen, files, setSelectedFile }: NavProps) => {
  const closeNav = () => {
    setNavOpen(false);
  }

  return (
    <div className={navOpen ? 'open-nav-cls' : 'close-nav-cls'}>
      <button className="closebtn" onClick={closeNav}>×</button>
      {files?.length ? files?.map((file, index) => {
        return (
          <button className='file-list' onClick={() => setSelectedFile(file)} key={index}>{file.name}</button>
        )
      }): null}
    </div>
  );
}
