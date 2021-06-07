import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizQuestionModule } from '../quiz-question/quiz-question.module';



@NgModule({
  declarations: [QuizComponent],
  imports: [
    CommonModule,
    QuizRoutingModule,
    QuizQuestionModule
  ],
  exports: [
    QuizComponent
  ]
})
export class QuizModule { }
