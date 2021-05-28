import { DataStore } from '@aws-amplify/datastore';
import { Question, Topic } from '../models';

export async function addQuestion(question: Question){
    return await DataStore.save(
        new Question({
            "questionText": question.questionText,
            "topic": question.topic
        })
    );
};


export async function getQuestionById(id: number){
    return await DataStore.query(Question, id.toString());
}

export async function deleteQuestionById(id: number){
    const modelToDelete = await DataStore.query(Question, id.toString());
    DataStore.delete(modelToDelete);
}

export async function getAllQuestions(){
    const models = await DataStore.query(Question);
    console.log(models);
    return models;
}

export async function getQuestionsByTopic(topic: Topic){
    const questions = await DataStore.query(Question, q => q.topic("eq", topic));
    return questions;
}

