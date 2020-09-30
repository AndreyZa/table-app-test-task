import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PeopleActions } from './store/PeopleActions';
import { PeopleTable } from './components/PeopleTable';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PeopleActions.fetchPeopleStarted());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="app">
      <PeopleTable />
    </div>
  );
};

export default App;
