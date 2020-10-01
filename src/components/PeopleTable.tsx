import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IPerson } from '../domain/IPerson';
import { IPersonStore } from '../store/IPersonStore';
import { PeopleActions } from '../store/PeopleActions';
import { PeopleTableRow } from './PeopleTableRow';

export type PeopleTabelSortState = 'Id' | 'First Name' | 'Last Name' | 'Phone' | 'Gender' | 'Age';

export const PeopleTable: React.FC = () => {
  const people = useSelector((state: IPersonStore) => state.people);
  const dispatch = useDispatch();

  // sort by id default
  const [sortState, setSortState] = useState<PeopleTabelSortState>('Id');
  const sortWithChoicedKey = (title: string) => setSortState(title as PeopleTabelSortState);

  const sortWithKeyCallback = (a: IPerson, b: IPerson) => {
    let sortKey: string;
    if (sortState === 'First Name') {
      sortKey = 'firstName';
    } else if (sortState === 'Last Name') {
      sortKey = 'lastName';
    } else {
      sortKey = sortState.toLowerCase();
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const aWithKeyLowerBwithSameKey = a[sortKey] > b[sortKey];

    if (aWithKeyLowerBwithSameKey) {
      return -1;
    } else if (!aWithKeyLowerBwithSameKey) {
      return 1;
    } else {
      return 0;
    }
  };

  return (
    <div>
      <table className="table table-bordered table-striped table-sm">
        <thead>
          <tr>
            {['Id', 'First Name', 'Last Name', 'Phone', 'Gender', 'Age', 'Delete'].map(
              (title: string, index: number, titles: string[]) => (
                <th
                  key={index + title + Math.random()}
                  // eslint-disable-next-line @typescript-eslint/no-empty-function
                  onClick={index !== titles.length - 1 ? () => sortWithChoicedKey(title) : () => {}}
                  scope="col"
                >
                  {title}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {people.sort(sortWithKeyCallback).map((person: IPerson, index: number) => {
            const deletePerson = () => dispatch(PeopleActions.deletePerson(person));
            return (
              <PeopleTableRow
                key={index + person.id + Math.random()}
                {...person}
                deletePerson={deletePerson}
              />
            );
          })}
        </tbody>
      </table>
      <small className="form-text text-muted">
        (Сортировка происходит нажатием на верхнюю часть колонки.Сортировка только в одном порядке)
      </small>
    </div>
  );
};
