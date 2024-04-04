import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Router } from '@angular/router';
import { Quiz, quizResult } from '../Types';

@Component({
  selector: 'app-quiz-info',
  templateUrl: './quiz-info.component.html',
  styleUrl: './quiz-info.component.css'
})
export class QuizInfoComponent implements OnInit {
 constructor(private testService:TestService, private router:Router){}
 quizResult!:quizResult;
 quizInfo!: Quiz;
 ngOnInit() {
  this.quizResult = this.testService.quizResult;
  if (!this.quizResult) {
    this.router.navigateByUrl('/');
    return;
  }
    let quizId = this.quizResult.quizId;
    this.testService.getQuizById(quizId).subscribe((quiz) => {
      this.quizInfo = quiz;
      });
  }
  start() {
    this.router.navigateByUrl('/quiz');
  }

}