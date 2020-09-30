import React from 'react';
import { useDispatch } from 'react-redux';
import { randomNum } from '../utils/randomNum';
import { PeopleActions } from '../store/PeopleActions';

// @TODO: styles for table and form
export const PeopleForm: React.FC = () => {
  const dispatch = useDispatch();

  const valid = (elements: HTMLFormControlsCollection): boolean => {
    // todo validation
    return false;
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submit event');

    const id = randomNum(1000);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { firstName, lastName, phone, gender, age } = event.currentTarget.elements;
    const [male] = [...gender];

    dispatch(
      PeopleActions.addPerson({
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
        gender: male.checked,
        age: age.value,
        id,
      })
    );
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" id="phone" className="form-control" />
      </div>
      <div className="form-check form-check-inline">
        <input type="radio" name="gender" id="genderMale" className="form-check-input" />
        <label htmlFor="genderMale" className="form-check-label">
          Male
        </label>
        <input type="radio" name="gender" id="genderFemale" className="form-check-input" />
        <label htmlFor="genderFemale" className="form-check-label">
          Female
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
