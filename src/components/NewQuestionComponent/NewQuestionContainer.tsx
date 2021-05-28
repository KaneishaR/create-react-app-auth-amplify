import { IState } from "../../reducers";
import { connect } from "react-redux";
import { getQuestionAction, newQuestionAction, deleteQuestionAction } from "../../actions/question-action"
import NewQuestionComponent from "./NewQuestionComponent";
 const mapStateToProps = (state: IState) => {
     return {
         status : state.question.status
     }
 }

 const mapDispatchToProps = {
    newQuestionAction,
    deleteQuestionAction,
    getQuestionAction
 }

 export default connect(mapStateToProps, mapDispatchToProps)(NewQuestionComponent);
