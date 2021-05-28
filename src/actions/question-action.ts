import { Dispatch } from "redux"
import { Question, Topic } from "../models"
import { addQuestion, deleteQuestionById, getQuestionById } from "../remote/question-service"

export const questionActionTypes = {
    SUCCESSFUL_NEW_QUESTION: 'STUDY_GAME_SUCCESSFUL_NEW_QUESTION',
    SUCCESSFUL_GET_QUESTION: 'STUDY_GAME_SUCCESSFUL_GET_QUESTION',
    SUCCESSFUL_DELETE_QUESTION: 'STUDY_GAME_SUCCESSFUL_DELETE_QUESTION',
    BAD_REQUEST: 'STUDY_GAME_BAD_REQUEST',
    INTERNAL_SERVER_ERROR: 'STUDY_GAME_INTERNAL_SERVER_ERROR'
}

export const newQuestionAction = (text: string, topic: Topic) => async (dispatch: Dispatch) => {
    try {
            let question = await addQuestion(new Question({
                "questionText": text,
                "topic": topic
            }));
            dispatch ({
                type : questionActionTypes.SUCCESSFUL_NEW_QUESTION,
                payload: 'Successful created question: ' + question.id
            });
    } catch (e) {

        let status = e.response.status;
        if (status === 400) {
            dispatch({
                type: questionActionTypes.BAD_REQUEST,
                payload: e.response.data.message
            });
        } else {
            dispatch({
                type: questionActionTypes.INTERNAL_SERVER_ERROR,
                payload: e.response.data.message || 'Uh oh! We could not reach the server!'
            });
        }

    }
}

export const getQuestionAction = (id:number) => async (dispatch: Dispatch) => {
    try {
        let question  = await getQuestionById(id);
        dispatch({
            type: questionActionTypes.SUCCESSFUL_GET_QUESTION,
            payload: question
        })
    } catch(e) {

    }
}

export const deleteQuestionAction = (id: number) => async (dispatch: Dispatch) => {
    try {
             await deleteQuestionById(id);
             dispatch({
                type: questionActionTypes.INTERNAL_SERVER_ERROR,
                payload: 'Deleted question id: ' + id
            });
            
    } catch (e) {

        let status = e.response.status;
        if (status === 400) {
            dispatch({
                type: questionActionTypes.BAD_REQUEST,
                payload: e.response.data.message
            });
        } else {
            dispatch({
                type: questionActionTypes.INTERNAL_SERVER_ERROR,
                payload: e.response.data.message || 'Uh oh! We could not reach the server!'
            });
        }

    }
}