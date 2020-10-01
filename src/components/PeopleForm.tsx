import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { randomNum } from '../utils';
import { PeopleActions } from '../store/PeopleActions';

export interface IPeopleFormState {
  [key: string]: string | boolean | number;
  firstName: string;
  lastName: string;
  phone: string;
  gender: boolean;
  age: number;
}

// @TODO: styles for table and form
export const PeopleForm: React.FC = () => {
  const [peopleFormState, setState] = useState<IPeopleFormState>(clearState());

  function clearState(): IPeopleFormState {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      gender: true,
      age: 0,
    };
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const genderMaleInput = document.querySelector('#genderMale') as HTMLInputElement;
    const value: string | number | boolean =
      event.target.name !== 'gender' ? (event.target.value as any) : genderMaleInput.checked;

    setState({
      ...peopleFormState,
      [event.target.name]: event.target.name !== 'age' ? value : Number(value),
    });
  };

  const dispatch = useDispatch();

  const valid = (elements: HTMLFormControlsCollection): boolean => {
    // todo validation
    return false;
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submit event');

    const id = randomNum(1000);

    dispatch(PeopleActions.addPerson({ ...peopleFormState, id }));
    setState(clearState());
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="form-control"
          value={peopleFormState.firstName}
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="form-control"
          value={peopleFormState.lastName}
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          className="form-control"
          value={peopleFormState.phone}
          onChange={changeHandler}
        />
      </div>
      <div className="form-check form-check-inline">
        <input
          type="radio"
          name="gender"
          id="genderMale"
          className="form-check-input"
          checked={peopleFormState.gender}
          onChange={changeHandler}
        />
        <label htmlFor="genderMale" className="form-check-label">
          Male
        </label>
        <input
          type="radio"
          name="gender"
          id="genderFemale"
          className="form-check-input"
          checked={!peopleFormState.gender}
          onChange={changeHandler}
        />
        <label htmlFor="genderFemale" className="form-check-label">
          Female
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          className="form-control"
          value={peopleFormState.age}
          onChange={changeHandler}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
