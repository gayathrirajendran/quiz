import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormConfig } from './../interfaces/form-config.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ANSWERS } from '../data/answer-key';
import { element } from 'protractor';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {

  @Input() formConfig: FormConfig[];
  @Input() userName: string;

  @Output() isSubmitted: EventEmitter<string> = new EventEmitter();

  form: FormGroup;
  submitted = false;

  formState: any = this.store.collection('quiz').valueChanges({ idField: 'id' }) as Observable<any>;

  isAllowed: Observable<boolean>;

  isResults = false;

  ANSWERS = ANSWERS;

  constructor(private store: AngularFirestore, private db: AngularFirestore) { }

  ngOnInit(): void {
    const formGroup = {};

    this.formConfig.forEach(formControl => {
      formGroup[formControl.controlName] = new FormControl('', Validators.required);
    });

    this.form = new FormGroup(formGroup);

    this.form.addControl('score', new FormControl(null));

    this.form.addControl('userName', new FormControl(this.userName));

    this.formState?.valueChanges?.subscribe((matter) => {
      console.log('lemter', matter);
    });
  }

  submitForm($event: any): void {

    this.computeScore();
    this.store.collection('quiz').add(this.form.getRawValue()).then((response) => {
      console.log('response', response);
      this.submitted = true;
    });

  }

  computeScore(): void {
    const submittedVal: any[] = this.form.getRawValue();
    const submittedValues = this.formConfig.map((item) => submittedVal[item.controlName]);
    const score = (submittedValues.filter((matter, index) =>
      this.formConfig[index].controlType !== 'textArea' ? matter === ANSWERS[index] : matter.length > 1
    )).length;
    this.form.get('score').setValue(score);
  }

  viewResults(): void {

    this.isResults = true;

  }

}
