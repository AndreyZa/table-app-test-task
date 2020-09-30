import { IPerson } from '../domain/IPerson';

export interface IPersonStore {
  people: IPerson[];
}

export type PersonAction = {
  type: string;
  payload?: string | boolean | number | IPerson | IPerson[];
};
