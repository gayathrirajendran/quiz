import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizQuestionComponent } from './quiz-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { InvalidOnesPipe } from '../pipes/invalid-ones.pipe';



@NgModule({
  declarations: [QuizQuestionComponent, InvalidOnesPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
  ],
  exports: [
    QuizQuestionComponent
  ]
})
export class QuizQuestionModule { }
