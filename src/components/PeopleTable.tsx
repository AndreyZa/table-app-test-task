import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IPerson } from '../domain/IPerson';
import { IPersonStore } from '../store/IPersonStore';
import { PeopleActions } from '../store/PeopleActions';
import { PeopleTableRow } from './PeopleTableRow';

export const PeopleTable: React.FC = () => {
  const people = useSelector((state: IPersonStore) => state.people);
  const dispatch = useDispatch();

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          {['Id', 'First Name', 'Last Name', 'Phone', 'Gender', 'Age', 'Delete'].map(
            (title: string, index: number) => (
              <th key={index + title}>{title}</th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {people.map((person: IPerson, index: number) => {
          const deletePerson = () => dispatch(PeopleActions.deletePerson(person));
          return <PeopleTableRow key={index + person.id} {...person} deletePerson={deletePerson} />;
        })}
      </tbody>
    </table>
  );
};
