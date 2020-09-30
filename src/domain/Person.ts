import { IPerson } from './IPerson';

export class Person implements IPerson {
  public readonly firstName: string;
  public readonly lastName: string;
  public readonly phone: string;
  public readonly gender: boolean;
  public readonly age: number;

  public constructor({
    firstName = 'Unknown',
    lastName = 'Unknown',
    phone = '+380123456789',
    gender = true,
    age = 20,
  }: IPerson) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.gender = gender;
    this.age = age;
  }
}
