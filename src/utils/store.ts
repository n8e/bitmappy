import { EncryptStorage } from 'encrypt-storage';
import { env, types } from '.';

const Storage = new EncryptStorage(env.secretKey, {
  prefix: '@gridlock'
});

export const get = (key: string) => {
  return Storage.getItem(key);
}

export const set = (key: string, value: types.IFile[]) => {
  return Storage.setItem(key, value);
}
