import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PeopleActions } from './store/PeopleActions';
import { PeopleTable } from './components/PeopleTable';
import { PeopleForm } from './components/PeopleForm/PeopleForm';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PeopleActions.fetchPeopleStarted());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="app" className="row">
      <div className="col-3">
        <PeopleForm />
      </div>
      <div className="col-5">
        <PeopleTable />
      </div>
    </div>
  );
};

export default App;
