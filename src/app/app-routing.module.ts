import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizModule } from './quiz/quiz.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/quiz'
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
