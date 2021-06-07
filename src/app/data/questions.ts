import { FormConfig } from '../interfaces/form-config.interface';

export const QUESTIONS: FormConfig[] = [
  {
    controlName: 'Username',
    controlType: 'text',
    valueType: 'text',
    placeholder: 'Enter username',
    validators: {
      required: true,
      minlength: 5
    }
  },
  {
    controlName: 'Telephone',
    placeholder: 'Enter Phone',
    valueType: 'tel',
    controlType: 'text',
    validators: {
      required: true,
      minlength: 7,
      maxlength: 10
    }
  },
  {
    controlName: 'Email',
    valueType: 'email',
    placeholder: 'Enter email',
    controlType: 'text',
    validators: {
      required: true
    }
  },
  {
    controlName: 'Gender',
    placeholder: 'Select gender',
    controlType: 'select',
    options: [
      {
        optionName: 'Male',
        val: 'male'
      },
      {
        optionName: 'Female',
        val: 'female'
      }
    ],
    validators: {
      required: true
    }
  },
  {
    controlName: 'vehicle',
    placeholder: 'Select vehicle',
    controlType: 'radio',
    options: [
      {
        optionName: 'I have a bike',
        val: 'bike'
      },
      {
        optionName: 'I have a car',
        val: 'car'
      }
    ]
  }
];
