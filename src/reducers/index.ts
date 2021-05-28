import { combineReducers } from "redux";
import { Question } from "../models";
import { newQuestionReducer } from "./question-reducer";

export interface ILoginState {
    authUser: string;
    errorMessage: string;
}

export interface IQuestionState {
    status: string;
    question: Question;
}
export interface IState {
    question: IQuestionState;

}

export const state = combineReducers<IState>({
      question: newQuestionReducer
})

