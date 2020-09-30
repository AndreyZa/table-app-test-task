import { call, put, takeLatest, ForkEffect } from 'redux-saga/effects';
import { IPerson } from '../domain/IPerson';
import { Person } from '../domain/Person';
import { LocalStorageManager } from '../ReadWriteData/LocalStorageManager';
import { IPersonStore, PersonAction } from './IPersonStore';
import { FETCH_PEOPLE_STARTED, SAVE_PEOPLE } from './actions';
import { PeopleActions } from './PeopleActions';

function* rootSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(FETCH_PEOPLE_STARTED, fetchPeople);
  // yield takeLatest(SAVE_PEOPLE, savePeople);
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

// function* savePeople(savePeopleAction: PersonAction) {
//   yield call(
//     // todo save before exit
//     LocalStorageManager.get().write.bind(LocalStorageManager.get())
//   );
// }

export default rootSaga;
