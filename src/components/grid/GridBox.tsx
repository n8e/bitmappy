import { types } from '../../utils';

import './index.css';

type GridBoxProps = {
  value: boolean;
  row: string;
  column: string;
  selectedFile?: types.IFile;
  setSelectedFile: (arg: types.IFile) => void;
}

export const GridBox = ({
  value,
  row,
  column,
  selectedFile,
  setSelectedFile
}: GridBoxProps) => {
  const handleClick = () => {
    if (selectedFile) {
      const boxValue = selectedFile.data[Number(row)][Number(column)];
      selectedFile.data[Number(row)][Number(column)] = !boxValue;

      setSelectedFile({ ...selectedFile })
    }    
  }

  return (
    <div
      className={value ? 'grid-box-selected' : 'grid-box'}
      onClick={handleClick}
    />
  )
};
