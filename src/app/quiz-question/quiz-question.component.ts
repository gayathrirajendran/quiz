import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormConfig } from './../interfaces/form-config.interface';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {

  @Input() formConfig: FormConfig[];
  form: FormGroup;
  submitted: boolean;

  constructor() { }

  ngOnInit(): void {
    const formGroup = {};

    this.formConfig.forEach(formControl => {
      formGroup[formControl.controlName] = new FormControl('');
    });

    this.form = new FormGroup(formGroup);

    this.form?.valueChanges.subscribe((matter) => {
      console.log(matter);
    });
  }

  submitForm(): void {
    this.submitted = true;
  }

}
