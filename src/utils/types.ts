export interface IFile {
  id: string;
  name: string;
  data: boolean[][];
}

export type EncryptFn = (file: IFile) => string | Error;
export type DecryptFn = (fileString: string) => IFile | Error;
