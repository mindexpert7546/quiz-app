import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizJoinComponent } from './quiz-join/quiz-join.component';
import { QuizInfoComponent } from './quiz-info/quiz-info.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizScoreComponent } from './quiz-score/quiz-score.component';

const routes: Routes = [
  { path: '', redirectTo: '/join', pathMatch: 'full' },
  {path:'quiz-info',component:QuizInfoComponent},
  {path:'quiz',component:QuizComponent},
  {path: 'quiz-score', component:QuizScoreComponent},
  {path:'join',component:QuizJoinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
