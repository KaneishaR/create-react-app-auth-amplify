import { Grid } from '@material-ui/core';
import React from 'react';
import { Answer, Question, QuestionAnswer } from '../../models';


export interface IAdminProps {
    
}
const AdminComponent = (props: IAdminProps) => {

    return(
        <Grid container spacing={2}>
            <Grid item xs={4}>New Question</Grid>
            <Grid item xs={4}>New Answer</Grid>
            <Grid item xs={4}>New QA</Grid>
            <Grid item xs={6}>Question Table</Grid>
            <Grid item xs={6}>Answer Table</Grid>
        </Grid>
    )

}

export default AdminComponent;