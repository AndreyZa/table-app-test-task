import { IPersonStore } from './store/IPersonStore';
import { LocalStorageManager } from './ReadWriteData/LocalStorageManager';

export const saveInStorage = (updatedStore: IPersonStore): void =>
  LocalStorageManager.get().write<IPersonStore>(updatedStore);

export const randomNum = (range: number): number => Math.floor(Math.random() * range);
