import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { quizResult } from '../Types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-join',
  templateUrl: './quiz-join.component.html',
  styleUrl: './quiz-join.component.css'
})
export class QuizJoinComponent implements OnInit {
  code!:string;
  name!:string;

  constructor(private testService:TestService, private router:Router){}

  ngOnInit(): void {
   this.join();
  }
  join(){
    if (this.code && this.name) {
      this.testService.getQuizByCode(this.code).subscribe(res=>{
        console.log(res);
        let quiz = res[0];
        let quizResult:quizResult = {
          name: this.name,
          quizId: quiz.id
        }
        this.testService.joinQuiz(quizResult).subscribe(res=>{
          this.testService.quizResult=res;
          this.router.navigateByUrl('/quiz-info');
        })
      })
     } else{
      //show error
    }
  }
}
