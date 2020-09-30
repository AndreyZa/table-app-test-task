import {
  FETCH_PEOPLE_STARTED,
  FETCHED_PEOPLE_SUCCESSFULLY,
  SAVE_PEOPLE,
  ADD_PERSON,
  DELETE_PERSON,
} from './actions';
import { PersonAction } from './IPersonStore';
import { IPerson } from '../domain/IPerson';

export class PeopleActions {
  public static fetchPeopleStarted = (): PersonAction => ({
    type: FETCH_PEOPLE_STARTED,
  });

  public static fetchedPeopleSuccessfully = (payload: IPerson[]): PersonAction => ({
    type: FETCHED_PEOPLE_SUCCESSFULLY,
    payload,
  });

  public static savePeople = (): PersonAction => ({
    type: SAVE_PEOPLE,
  });

  public static addPerson = (payload: IPerson): PersonAction => ({
    type: ADD_PERSON,
    payload,
  });

  public static deletePerson = (payload: IPerson): PersonAction => ({
    type: DELETE_PERSON,
    payload,
  });
}
