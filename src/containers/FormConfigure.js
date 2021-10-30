import { connect } from 'react-redux';
import FormConfigure from '../components/FormConfigure';
import * as actions from "../store/actions";

const mapStateToProps = state => ({
    formElements: state.form.formComposition,
});

const mapDispatchToProps = dispatch => ({
    deleteFormElement: elementId => dispatch(actions.deleteFormElement(elementId)),
    addNewTickBox: (elementId, tickBoxId) => dispatch(actions.addNewTickBox(elementId, tickBoxId)),
    deleteTickBox: (elementId, tickBoxId) => dispatch(actions.deleteTickBox(elementId, tickBoxId)),
    updateTitleText: (elementId, title) => dispatch(actions.updateTitleText(elementId, title)),
    updateTickBoxText: (elementId, tickBoxId, title) => dispatch(actions.updateTickBoxText(elementId, tickBoxId, title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormConfigure);