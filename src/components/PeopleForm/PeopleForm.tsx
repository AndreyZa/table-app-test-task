import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { validate } from 'validate.js';
import { peopleFormValidate, IErrorValidation } from './validate';
import { randomNum } from '../../utils';
import { PeopleActions } from '../../store/PeopleActions';

export interface IPeopleFormState {
  [key: string]: string | boolean | number;
  firstName: string;
  lastName: string;
  phone: string;
  gender: boolean;
  age: string;
}

export const PeopleForm: React.FC = () => {
  const [peopleFormState, setState] = useState<IPeopleFormState>(clearState());

  const dispatch = useDispatch();

  function clearState(): IPeopleFormState {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      gender: true,
      age: '',
    };
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const genderMaleInput = document.querySelector('#genderMale') as HTMLInputElement;
    const value: string | number | boolean =
      event.target.name !== 'gender' ? (event.target.value as any) : genderMaleInput.checked;

    setState({
      ...peopleFormState,
      [event.target.name]: value,
    });
  };

  const showUserHisErrors = (validateError: IErrorValidation): void => {
    // clean up error effects on element if it now valid
    [...document.querySelectorAll('.form-control')]
      .filter((element: Element) => !Object.keys(validateError).includes(element.id))
      .map((element: Element) => {
        element.classList.remove('incorrect-form-field');
        return element;
      })
      .forEach(({ parentElement }: Element) =>
        parentElement?.classList.remove('show-validation-errors')
      );

    Object.keys(validateError)
      .map((name: string) => [document.querySelector(`input[name="${name}"]`), name])
      .map(([input, name]) => {
        ((input as Element).nextElementSibling as Element).textContent = '';
        ((input as Element).nextElementSibling as Element).textContent = validateError[
          name as string
        ].join(', ');
        return input as Element;
      })
      .forEach((input: Element | null) => {
        (input as Element).parentElement?.classList.add('show-validation-errors');
        (input as Element).classList.add('incorrect-form-field');
      });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const somethingInvalid: IErrorValidation | undefined = validate(
      peopleFormState,
      peopleFormValidate
    );

    if (somethingInvalid) {
      showUserHisErrors(somethingInvalid);
      return;
    }

    const id = randomNum(1000);

    dispatch(PeopleActions.addPerson({ ...peopleFormState, age: Number(peopleFormState.age), id }));
    setState(clearState());

    // some dom work
    // after successfullysubmit event of form we need clean up
    // all error-visual-efffects

    // inputs
    document
      .querySelectorAll('.form-control')
      .forEach((formControl: Element) => formControl.classList.remove('incorrect-form-field'));

    // form-groups
    document
      .querySelectorAll('.form-group')
      .forEach((formGroup: Element) => formGroup.classList.remove('show-validation-errors'));
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
        <small className="form-text text-danger">Error</small>
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
        <small className="form-text text-danger">Error</small>
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
          placeholder={'380123456789'}
        />
        <small className="form-text text-danger">Error</small>
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
      <div className="form-group age-form-group">
        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          id="age"
          className="form-control"
          value={peopleFormState.age}
          onChange={changeHandler}
        />
        <small className="form-text text-danger">Error</small>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
