import { IQuestionState } from ".";
import { AnyAction } from "redux"
import { questionActionTypes } from "../actions/question-action";
import { Question } from "../models";

const initialState: IQuestionState = {
    status: '',
    //@ts-ignore
    question: (null as Question)
}

export const newQuestionReducer = (state: IQuestionState = initialState, action: AnyAction) => {

    switch(action.type){
        case questionActionTypes.SUCCESSFUL_NEW_QUESTION:
            return {
                ...state,
                status: action.payload
            }
        case questionActionTypes.SUCCESSFUL_DELETE_QUESTION:
            return {
                ...state,
                status: action.payload
            }
        case questionActionTypes.SUCCESSFUL_GET_QUESTION:
            return {
                ...state,
                question: action.payload,
                status: 'Successfully loaded question'
            }
        case questionActionTypes.BAD_REQUEST:
        case questionActionTypes.INTERNAL_SERVER_ERROR:
            return {
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
}