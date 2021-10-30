import { connect } from 'react-redux';
import FormPreviewer from '../components/FormPreviewer';
import * as actions from "../store/actions";

const mapStateToProps = state => ({
    title: state.form.title,
    formElements: state.form.formComposition,
    everything: state.form,
});

const mapDispatchToProps = dispatch => ({
    updateFormTitle: title => dispatch(actions.updateFormTitle(title)),
    updateTickBoxValue: (elementId, tickBoxId) => dispatch(actions.updateTickBoxValue(elementId, tickBoxId)),
    updateTextAreaValue: (elementId, textValue) => dispatch(actions.updateTextAreaValue(elementId, textValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormPreviewer);