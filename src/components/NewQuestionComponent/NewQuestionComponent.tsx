import { set } from 'immer/dist/internal';
import React, { useState } from 'react';
import { Question, Topic } from '../../models';


export interface INewQuestionProps {
    newQuestion: Question;
    newQuestionAction: (question: Question) => void;
}

const NewQuestionComponent = (props: INewQuestionProps) => {

    const [text, setText] = useState('');
    const [topic, setTopic] = useState(Topic);

    let updateField = (e: any) => {
        switch (e.currentTarget.id) {
            case 'text':
                setText(e.target.value);
                break;
            case 'topic':
                setTopic(e.target.value);
                break;
        }
    }

    let addNewQuestion = async () => {
        
    }
    return(
        <div>

        </div>
    )
}

export default NewQuestionComponent;