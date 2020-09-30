import { call, put, takeLatest, ForkEffect } from 'redux-saga/effects';
import { IPerson } from '../domain/IPerson';
import { Person } from '../domain/Person';
import { LocalStorageManager } from '../ReadWriteData/LocalStorageManager';
import { IPersonStore } from './IPersonStore';
import { FETCH_PEOPLE_STARTED } from './actions';
import { PeopleActions } from './PeopleActions';

function* rootSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(FETCH_PEOPLE_STARTED, fetchPeople);
}

function* fetchPeople() {
  const peopleStore: IPersonStore = yield call(
    LocalStorageManager.get().read.bind(LocalStorageManager.get())
  );
  yield put(
    PeopleActions.fetchedPeopleSuccessfully(
      peopleStore.people.map((person: IPerson) => new Person({ ...person }))
    )
  );
}

export default rootSaga;
