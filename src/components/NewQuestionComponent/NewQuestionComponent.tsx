import { Button, FormControl, Input, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react';
import { Question, Topic } from '../../models';


export interface INewQuestionProps {
    status: string;
    question: Question;
    newQuestionAction: (text: string, topic:Topic) => void;
    deleteQuestionAction: (id: number) => void;
    getQuestionAction: (id: number) => void;
}

const NewQuestionComponent = (props: INewQuestionProps) => {

    const [qid, setQid] = useState(0);
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
            case 'qid':
                setQid(e.target.value);
                break;
        }
    }

    let getQuestion = async () => {
        props.getQuestionAction(qid)
    }
    let addNewQuestion = async () => {
        //@ts-ignore
        props.newQuestionAction(text, topic);   
    }
    let deleteQuestion = async () => {
        props.deleteQuestionAction(qid)
    }
    return(
        <div>
            <form>
                <FormControl margin="normal" fullWidth>
                    <InputLabel>Question Id</InputLabel>
                    <Input 
                        onChange={updateField} 
                        value={qid} 
                        id="qid" type="text" 
                        placeholder="Enter question id" />
                </FormControl>
                <br/><br/>
                <Button 
                    onClick={getQuestion} 
                    variant="contained" 
                    color="primary" 
                    size="medium">Find Question
                </Button>

                <Button 
                    disabled={!props.question}
                    onClick={deleteQuestion} 
                    variant="contained" 
                    color="primary" 
                    size="medium">Delete Question
                </Button>
                <br/><br/>
            </form>

            <form>
                <FormControl >
                    <InputLabel id="topic-select-label">Topic</InputLabel>
                    <Select
                    labelId="topicdemo-simple-select-label"
                    id="topic"
                    value={topic}
                    onChange={updateField}
                    >
                    <MenuItem value={Topic.ANGULAR}>Angular</MenuItem>
                    <MenuItem value={Topic.AWS}>AWS</MenuItem>
                    <MenuItem value={Topic.COREJAVA}>Core Java</MenuItem>
                    <MenuItem value={Topic.DEVOPS}>DevOps</MenuItem>
                    <MenuItem value={Topic.HIBERNATE}>Hibernate</MenuItem>
                    <MenuItem value={Topic.JAVASCRIPT}>JavaScript</MenuItem>
                    <MenuItem value={Topic.MSA}>Microservices</MenuItem>
                    <MenuItem value={Topic.OOP}>OOP</MenuItem>
                    <MenuItem value={Topic.REACT}>Reacty</MenuItem>
                    <MenuItem value={Topic.REST}>RESTful Services</MenuItem>
                    <MenuItem value={Topic.SPRING}>Spring</MenuItem>
                    <MenuItem value={Topic.SQL}>SQL</MenuItem>
                    </Select>
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel>Question Text</InputLabel>
                    <Input 
                        onChange={updateField} 
                        value={text}
                        id="text" type="text" 
                        placeholder="Enter question text" />
                </FormControl>
                <br/><br/>
                <Button 
                    
                    onClick={addNewQuestion} 
                    variant="contained" 
                    color="primary" 
                    size="medium">Save Question
                </Button>
                <br/><br/>
            </form>

            <Alert severity="info">{props.status}</Alert>


        </div>
    )
}

export default NewQuestionComponent;