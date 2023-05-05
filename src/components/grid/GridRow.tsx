import { GridBox } from '.';
import { fileUtil, types } from '../../utils';

import './index.css';

type GridRowProps = {
  data: boolean[];
  row: string;
  selectedFile?: types.IFile;
  setSelectedFile: (arg: types.IFile) => void;
}

export const GridRow = ({
  data,
  row,
  selectedFile,
  setSelectedFile
}: GridRowProps) => {
  const getValues = (data: boolean[]) => {
    if (data.length) return data;

    const values = [];
    while(values.length < fileUtil.GRID_WIDTH) {
      values.push(false);
    }
    return values;
  }

  return (
    <div className="grid-row">
      {
        getValues(data)
          .map((value, index) => {
            const key = `row_${row}_column_${index}`;

            return (
              <GridBox
                key={key}
                row={row}
                column={`${index}`}
                value={value}
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
              />
            );
          })
      }
    </div>
  );
}
