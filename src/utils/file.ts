import { v4 as uuidv4 } from 'uuid';
import { store, types } from '.';

type GetFilesFn = () => types.IFile[];

const FILES_KEY = 'files';
export const GRID_HEIGHT = 100;
export const GRID_WIDTH = 100;

const generateRandomRow = (length: number, empty?: boolean) => {
  const row = [];

  for (let i = 0; i < length; i++) {
    if (empty) {
      row.push(false);
    } else {
      const randomNum: number = Math.floor(Math.random() * 2);
      const value = randomNum === 0 ? false : true;
      row.push(value);
    }
  }

  return row;
}

const generateGrid = (height: number, empty?: boolean) => {
  const grid = [];

  for (let i = 0; i < height; i++) {
    const randomRow = generateRandomRow(GRID_WIDTH, empty);
    grid.push(randomRow);
  }

  return grid;
}

export const getFiles: GetFilesFn = () => {
  const lcFiles = store.get(FILES_KEY);

  if (lcFiles) {
    return lcFiles;
  }

  return [];
};

export const generateRandomFile = () => ({
  id: '',
  name: uuidv4(),
  data: generateGrid(GRID_HEIGHT)
});

export const createNewFile = () => ({
  id: '',
  name: '',
  data: generateGrid(GRID_HEIGHT, true)
})

export const saveFile = (file: types.IFile) => {
  const savedFiles = store.get(FILES_KEY);
  const filesArray: types.IFile[] = savedFiles || [];

  if (file.id) {
    //ammend existing
    const fileIndex = filesArray.findIndex(fileObj => fileObj.id === file.id);
    filesArray[fileIndex] = file;
  } else {
    // add id to file
    const normalizedFile = { ...file, id: uuidv4() };
    filesArray.push(normalizedFile);
  }

  store.set(FILES_KEY, filesArray);
}
