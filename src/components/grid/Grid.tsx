import { GridRow } from '.';
import { fileUtil, types } from '../../utils';

import './index.css';

type GridProps = {
  data?: boolean[][];
  selectedFile?: types.IFile;
  setSelectedFile: (arg: types.IFile) => void;
}

export const Grid = ({ data, selectedFile, setSelectedFile }: GridProps) => {
  const getValues = (data?: boolean[][]) => {
    if (data) return data;

    const values = [];
    while(values.length < fileUtil.GRID_HEIGHT) {
      values.push([]);
    }
    return values;
  }

  return (
    <div className='grid-rows'>
      {
        getValues(data)
          .map((row, index) => {
            return (
              <GridRow
                key={`row_${index}`}
                row={`${index}`}
                data={row}
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
              />
            );
          })
      }
    </div>
  );
};
