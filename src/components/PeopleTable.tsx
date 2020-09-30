import React from 'react';
import { useSelector } from 'react-redux';
import { IPerson } from '../domain/IPerson';
import { IPersonStore } from '../store/IPersonStore';
import { PeopleTableRow } from './PeopleTableRow';

export const PeopleTable: React.FC = () => {
  const people = useSelector((state: IPersonStore) => state.people);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          {['Id', 'First Name', 'Last Name', 'Phone', 'Gender', 'Age'].map(
            (title: string, index: number) => (
              <th key={index + title}>{title}</th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {people.map((person: IPerson, index: number) => (
          <PeopleTableRow key={index + person.id} {...person} />
        ))}
      </tbody>
    </table>
  );
};
