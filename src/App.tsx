import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PeopleActions } from './store/PeopleActions';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PeopleActions.fetchPeopleStarted());
  }, []);

  return <h1>Hello World!</h1>;
};

export default App;
