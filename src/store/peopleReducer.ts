import { IPersonStore, PersonAction } from './IPersonStore';
import { FETCHED_PEOPLE_SUCCESSFULLY, ADD_PERSON, DELETE_PERSON } from './actions';
import { IPerson } from '../domain/IPerson';
import { saveInStorage } from '../utils';

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
      // eslint-disable-next-line no-case-declarations
      const updatedStore: IPersonStore = {
        ...state,
        people: [...state.people, action.payload as IPerson],
      };

      saveInStorage(updatedStore);
      return updatedStore;
    case DELETE_PERSON:
      // eslint-disable-next-line no-case-declarations
      const deletedState: IPersonStore = {
        ...state,
        people: state.people.filter(
          (person: IPerson) => person.id !== (action.payload as IPerson).id
        ),
      };

      saveInStorage(deletedState);
      return deletedState;
    default:
      return state;
  }
};
