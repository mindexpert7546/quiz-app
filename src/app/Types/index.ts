export interface Quiz {
    id:number,
    name: string,
    code:string,
    questions:number[]
}

export interface questions{
    id: number,
    content: string,
    marks: number,
    negativeMarks: number,
    options: Option[]
}

export interface Option{
    id: string,
    content: string,
    isCorrect: boolean
}

export interface quizResult{
    id:number,
    name:string,
    score:number,
    percentage:number,
    correct:number,
    inCorrect:number,
    unAttempt:number,
    response:{questionId:number,answerOptionId:number}[]

}