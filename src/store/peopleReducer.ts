import { IPersonStore, PersonAction } from './IPersonStore';
import { FETCHED_PEOPLE_SUCCESSFULLY, ADD_PERSON, DELETE_PERSON } from './actions';
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
    case ADD_PERSON:
      return {
        ...state,
        people: [...state.people, action.payload as IPerson],
      };
    case DELETE_PERSON:
      return {
        ...state,
        people: state.people.filter((person: IPerson) => person.id !== action.payload),
      };
    default:
      return state;
  }
};
