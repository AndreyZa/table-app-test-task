import React from 'react';
import { IPerson } from '../domain/IPerson';

export const PeopleTableRow: React.FC<IPerson> = ({
  id,
  firstName,
  lastName,
  phone,
  gender,
  age,
}) => (
  <tr>
    <td>{id}</td>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{phone}</td>
    <td>{gender ? 'male' : 'female'}</td>
    <td>{age}</td>
  </tr>
);
