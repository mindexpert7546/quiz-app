import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Route, Router } from '@angular/router';
import { quizResult } from '../Types';

@Component({
  selector: 'app-quiz-score',
  templateUrl: './quiz-score.component.html',
  styleUrl: './quiz-score.component.css'
})
export class QuizScoreComponent implements OnInit {
  constructor(private testService:TestService, private router:Router){}
  quizResult!:quizResult;
  ngOnInit(){
    this.quizResult = this.testService.quizResult;
      if (!this.quizResult) {
        this.router.navigateByUrl('/');
        return;
      }
    let quizResultId= this.testService.quizResult.id!;
    this.testService.getQuizResult(quizResultId).subscribe(result=>{
     this.quizResult=result;
    })
  }
  }