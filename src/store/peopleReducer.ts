import { IPersonStore, PersonAction } from './IPersonStore';
import { FETCHED_PEOPLE_SUCCESSFULLY } from './actions';
import { IPerson } from '../domain/IPerson';

const initialState: IPersonStore = {
  people: [],
};

export const peopleReducer = (
  state: IPersonStore = initialState,
  action: PersonAction
): IPersonStore => {
  switch (action.type) {
    case FETCHED_PEOPLE_SUCCESSFULLY:
      return {
        ...state,
        people: action.payload as IPerson[],
      };
    default:
      return state;
  }
};
