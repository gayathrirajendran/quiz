import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizQuestionComponent } from './quiz-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [QuizQuestionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    QuizQuestionComponent
  ]
})
export class QuizQuestionModule { }
