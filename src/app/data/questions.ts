import { FormConfig } from '../interfaces/form-config.interface';

export const QUESTIONS: FormConfig[] = [
  // {
  //   controlName: 'Username',
  //   controlType: 'select',
  //   valueType: 'select',
  //   placeholder: 'Enter username',
  //   options: [
  //     {
  //       optionName: 'Ram',
  //       val: 'Ram'
  //     },
  //     {
  //       optionName: 'Sita',
  //       val: 'Sita'
  //     }
  //   ],
  //   validators: {
  //     required: true,
  //   }
  // },
  {
    controlName: 'Telephone',
    placeholder: 'Enter Phone',
    valueType: 'tel',
    controlType: 'text',
    validators: {
      required: true,
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
