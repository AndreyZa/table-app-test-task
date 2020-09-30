export interface IReadable {
  read<T>(): T;
}

export interface IWriteable {
  write<T>(data: T): void;
}

export interface IEditable extends IReadable, IWriteable {}
