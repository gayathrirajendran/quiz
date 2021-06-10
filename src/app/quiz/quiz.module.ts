import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizQuestionModule } from '../quiz-question/quiz-question.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [QuizComponent],
  imports: [
    CommonModule,
    QuizRoutingModule,
    QuizQuestionModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    QuizComponent
  ]
})
export class QuizModule { }
