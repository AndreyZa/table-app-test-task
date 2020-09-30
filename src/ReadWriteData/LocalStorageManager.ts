import { IEditable } from './readAndWriteInterfaces';
import config from './config.json';

export class LocalStorageManager implements IEditable {
  public nameOfEntry: string;
  private static _instance: LocalStorageManager;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {
    this.nameOfEntry = config.name;
  }

  public static get(): LocalStorageManager {
    if (!LocalStorageManager._instance) {
      LocalStorageManager._instance = new LocalStorageManager();
    }

    return LocalStorageManager._instance;
  }

  public read<T>(): T {
    let data: string | null = localStorage.getItem(this.nameOfEntry);
    if (!data) {
      data = '{ "people": [] }';
    }

    return JSON.parse(data);
  }

  public write<T>(data: T): void {
    localStorage.setItem(this.nameOfEntry, JSON.stringify(data));
  }
}
