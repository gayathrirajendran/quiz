import { FormConfig } from '../interfaces/form-config.interface';

const PIPE_QUESTION = `

\`\`\`typescript

@Component({
  selector: 'list-pipe',
  template: \`<ul>
    <li *ngFor="let i of greeting | slice:0:5">{{i}}</li>
  </ul>\`
})
export class PipeListComponent {
  greeting: string[] = ['h', 'e', 'l', 'l', 'o', 'm','o', 'r', 'n', 'i', 'n', 'g'];
}
\`\`\`
`;

const RENDERING_Q_1 = `
\`\`\`html
<html>
  <body>
    <ng-container>Hahhaaa</ng-container>
  </body>
</html>
\`\`\`
`;

const RENDERING_Q_2 = `
\`\`\`html
<html>
  <body>
    <div>Hahhaaa</div>
  </body>
</html>
\`\`\`
`;

const RENDERING_Q_3 = `
\`\`\`html
<html>
  <body>
    <span>Hahhaaa</span>
  </body>
</html>
\`\`\`
`;

const RENDERING_Q_4 = `
\`\`\`html
<html>
  <body>
    <article>Hahhaaa</article>
  </body>
</html>
\`\`\`
`;

const RADIO_QUESTION_OPTION_1 = `
\`\`\`html
<div class="custom-control custom-radio">
  <input id="male" type="radio" class="custom-control-input" value="male" name="gender" formControlName="gender">
  <label class="custom-control-label">Male</label>
</div>

<div class="custom-control custom-radio">
  <input id="female" type="radio" class="custom-control-input" value="female" name="gender" formControlName="gender">
  <label class="custom-control-label">Female</label>
</div>
\`\`\`
`;

const RADIO_QUESTION_OPTION_2 = `
\`\`\`html
<div class="custom-control custom-radio">
  <input id="male" type="radio" class="custom-control-input" value="male" name="gender" formControlName="gender">
  <label class="custom-control-label" for="male">Male</label>
</div>

<div class="custom-control custom-radio">
  <input id="female" type="radio" class="custom-control-input" value="female" name="gender" formControlName="gender">
  <label class="custom-control-label" for="female">Female</label>
</div>
\`\`\`
`;

const RADIO_QUESTION_OPTION_3 = `
\`\`\`html
<div class="custom-control custom-radio">
  <input id="male" type="radio" class="custom-control-input" [value]="male" name="gender" formControlName="gender">
  <label class="custom-control-label" for="male">Male</label>
</div>

<div class="custom-control custom-radio">
  <input id="female" type="radio" class="custom-control-input" [value]="female" name="gender" formControlName="gender">
  <label class="custom-control-label" for="female">Female</label>
</div>
\`\`\`
`;

export const QUESTIONS: FormConfig[] = [
  {
    controlName: 'Which of the following statements is true',
    placeholder: 'Which of the following statements is true',
    controlType: 'radio',
    options: [
      {
        optionName: 'Directive is a component with no template',
        val: 'option 1',
      },
      {
        optionName: 'Component is a type of directive',
        val: 'option 2'
      }
    ],
    validators: {
      required: true
    }
  },
  {
    controlName: 'Microsoft is stopping IE support - Dream or reality',
    placeholder: 'Microsoft is stopping IE support - Dream or reality',
    controlType: 'radio',
    options: [
      {
        optionName: 'Dream',
        val: 'option 1',
      },
      {
        optionName: 'Reality',
        val: 'option 2'
      }
    ],
    validators: {
      required: true
    }
  },
  {
    controlName: 'Differential loading enables',
    placeholder: 'Choose the right answer',
    controlType: 'select',
    valueType: 'select',
    options: [
      {
        optionName: 'Loading module on demand',
        val: 'option 1'
      },
      {
        optionName: 'Run time loading of components',
        val: 'option 2'
      },
      {
        optionName: 'generates additional bundles for compatibility',
        val: 'option 3'
      }
    ],
    validators: {
      required: true
    }
  },
  {
    controlName: 'If you provide a custom service in UserListComponent and DashboardComponent \'s “providers” section of @Component decorator, how many instances of service shall get created?',
    placeholder: '',
    controlType: 'radio',
    options: [
      {
        optionName: '>1',
        val: 'option 1'
      },
      {
        optionName: '<1',
        val: 'option 2'
      }
    ],
    validators: {
      required: true
    }
  },
  {
    controlName: 'ng lint is ',
    placeholder: 'ng lint is ',
    controlType: 'select',
    valueType: 'select',
    options: [
      {
        optionName: 'linter for project configuration',
        val: 'option 1'
      },
      {
        optionName: 'static code analysis',
        val: 'option 2'
      },
      {
        optionName: 'build tool',
        val: 'option 3'
      }
    ],
    validators: {
      required: true
    }
  },
  {
    controlName: 'One component can be declared inside more than one NgModule, as of angular 10',
    placeholder: 'One component can be declared inside more than one NgModule, as of angular 10',
    controlType: 'radio',
    options: [
      {
        optionName: 'true',
        val: 'option 1',
      },
      {
        optionName: 'false',
        val: 'option 2'
      }
    ],
    validators: {
      required: true
    }
  },
  {
    controlName: 'Identify the right output',
    placeholder: 'Identify the right output',
    controlType: 'radio',
    labelMarkdownElement: PIPE_QUESTION,
    options: [
      {
        optionName: 'hellomorning',
        val: 'option 1',
      },
      {
        optionName: `['h', 'e', 'l', 'l', 'o', 'm','o', 'r', 'n', 'i', 'n', 'g']`,
        val: 'option 2',
      },
      {
        optionName: 'hellom',
        val: 'option 3'
      },
      {
        optionName: `['h', 'e', 'l', 'l', 'o', 'm']`,
        val: 'option 4',
      },
      {
        optionName: 'hello',
        val: 'option 5'
      },
      {
        optionName: `['h', 'e', 'l', 'l', 'o']`,
        val: 'option 6',
      },
      {
        optionName: 'hellomo',
        val: 'option 7'
      },
      {
        optionName: `['h', 'e', 'l', 'l', 'o', 'm', 'o']`,
        val: 'option 8',
      },
    ],
    validators: {
      required: true
    }
  },
  {
    controlName: 'Identify which one of this will work perfectly',
    placeholder: 'Identify which one of this will work perfectly',
    controlType: 'radio',
    options: [
      {
        optionName: 'Option 1',
        markdownElement: RADIO_QUESTION_OPTION_1,
        val: 'option1',
      },
      {
        optionName: 'Option 2',
        markdownElement: RADIO_QUESTION_OPTION_2,
        val: 'option2'
      }, {
        optionName: 'Option 3',
        markdownElement: RADIO_QUESTION_OPTION_3,
        val: 'option3'
      }
    ],
    validators: {
      required: true
    }
  },
  {
    controlName: 'Identify the one which will render no output',
    placeholder: 'Identify the one which will render no output',
    controlType: 'radio',
    options: [
      {
        optionName: 'Option 1',
        markdownElement: RENDERING_Q_1,
        val: 'option1',
      },
      {
        optionName: 'Option 2',
        markdownElement: RENDERING_Q_2,
        val: 'option2'
      }, {
        optionName: 'Option 3',
        markdownElement: RENDERING_Q_3,
        val: 'option3'
      },
      {
        optionName: 'Option 4',
        markdownElement: RENDERING_Q_4,
        val: 'option3'
      }
    ],
    validators: {
      required: true
    }
  },
  {
    controlName: 'In your opinion, whats the toughest feature of angular',
    placeholder: 'Let know from your experience',
    valueType: 'textArea',
    controlType: 'textArea',
    validators: {
      required: true,
    }
  },
];
