import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, switchMap } from 'rxjs';
import { Quiz, questions, quizResult } from '../Types';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private _http:HttpClient) { }

  api = "http://localhost:3000/";
  quizResult!:quizResult; // to store the result of quiz

  getQuestions() {
    return this._http.get<questions[]>('http://localhost:3000/questions');
  }
  getQuizByCode(code:string){
    return this._http.get<Quiz[]>(this.api + "quizs?code="+code);
  }

  joinQuiz(quizResult: quizResult) {
    return this._http.get<quizResult[]>(this.api + "quizResults").pipe(
      map(results => {
        const highestId = results.reduce((max, current) => Math.max(max, current.id || 0), 0);
        quizResult.id = highestId + 1;
        return quizResult;
      }),
      switchMap(updatedQuizResult => {
        return this._http.post<quizResult>(this.api + "quizResults", updatedQuizResult);
      })
    );
  }

  getQuizById(id: number) {
    return this._http.get<Quiz>('http://localhost:3000/quizs/' + id);
  }
  updateQuizResult(id: number, result: quizResult) {
    return this._http.put<quizResult>(`${this.api}quizResults/${id}`, result);
  }
  
 getQuizResult(id: number) {
  return this._http.get<quizResult>(`${this.api}quizResults/${id}`);
}

  
}
