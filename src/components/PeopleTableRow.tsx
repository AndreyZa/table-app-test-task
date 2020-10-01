import React from 'react';
import { IPerson } from '../domain/IPerson';
import { PersonAction } from '../store/IPersonStore';

export interface IPersonTableRowProps extends IPerson {
  deletePerson: () => PersonAction;
}

export const PeopleTableRow: React.FC<IPersonTableRowProps> = ({
  id,
  firstName,
  lastName,
  phone,
  gender,
  age,
  deletePerson,
}) => (
  <tr>
    <td>{id}</td>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{phone}</td>
    <td>{gender ? 'male' : 'female'}</td>
    <td>{age}</td>
    <td className="delete-btn">
      <button onClick={deletePerson} className="btn btn-danger">
        Delete
      </button>
    </td>
  </tr>
);
