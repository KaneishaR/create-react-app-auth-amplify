import { IState } from '../../reducers';
import { connect } from "react-redux";
import AdminComponent from './AdminComponent';

const mapStateToProps = (state: IState) => {
    return {

    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AdminComponent);