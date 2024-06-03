// src/common/validators/is-date-string.ts
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsDateStringConstraint implements ValidatorConstraintInterface {
  validate(date: any, args: ValidationArguments) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return typeof date === 'string' && dateRegex.test(date);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Date ($value) is not in the correct format (YYYY-MM-DD)';
  }
}

export function IsDateString(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsDateStringConstraint,
    });
  };
}
