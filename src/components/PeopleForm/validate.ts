import validate from 'validate.js';

type LengthType = {
  is?: number;
  maximum?: number;
  minimum?: number;
};

export const peopleFormValidate = {
  firstName: {
    presence: true,
    format: {
      pattern: /^[a-zA-Z ]+$/,
      message(value: string): string {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return validate.format(`${value} is not a valid First Name`);
      },
    },
    length(value: string): boolean | LengthType {
      if (value.trim()) {
        if (/^[a-zA-Z ]+$/.test(value)) {
          return {
            minimum: 3,
            maximum: 16,
          };
        }
      }

      return false;
    },
  },

  lastName: {
    presence: true,
    format: {
      pattern: /^[a-zA-Z ]+$/,
      message(value: string): string {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return validate.format(`${value} is not a valid Last Name`);
      },
    },
    length(value: string): boolean | LengthType {
      if (value.trim()) {
        if (/^[a-zA-Z ]+$/.test(value)) {
          return {
            minimum: 3,
            maximum: 16,
          };
        }
      }

      return false;
    },
  },

  phone: {
    presence: true,
    format: {
      pattern: /^\d+$/,
      message(value: string): string {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return validate.format(`${value} is not a valid phone number`);
      },
    },

    length(value: string): boolean | LengthType {
      if (value) {
        if (/^\d+$/.test(value)) {
          return {
            is: 12,
          };
        }
      }

      return false;
    },
  },

  age: {
    presence: true,
    format: {
      pattern: /^\d+$/,
      message(value: number): string {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return validate.format(`${value} is not a valid age`);
      },
    },

    length(value: number): boolean | LengthType {
      if (value) {
        if (/^\d+$/.test(String(value))) {
          return {
            is: 2,
          };
        }
      }

      return false;
    },
  },
};

export interface IErrorValidation {
  [key: string]: string[];
  firstName: string[];
  lastName: string[];
  phone: string[];
  age: string[];
}
