import { connect } from 'react-redux';
import FormBuilder from '../components/FormBuilder';
import * as actions from "../store/actions";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    addNewFormElement: elementType => dispatch(actions.addNewFormElement(elementType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormBuilder);