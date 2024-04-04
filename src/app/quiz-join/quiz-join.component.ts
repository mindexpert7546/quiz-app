import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-join',
  templateUrl: './quiz-join.component.html',
  styleUrl: './quiz-join.component.css'
})
export class QuizJoinComponent {
  code!:String;
  name!:String;
  
  join(){
    if (this.code && this.name) {
    }  else{
      //show error
    }
  }
}
