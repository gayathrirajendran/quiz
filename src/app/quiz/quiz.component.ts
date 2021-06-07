import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { QUESTIONS } from '../data/questions';
import { FormConfig } from '../interfaces/form-config.interface';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  data: FormConfig[];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.data = QUESTIONS;

    this.cd.detectChanges();

  }

}
