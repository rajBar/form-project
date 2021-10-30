import { connect } from 'react-redux';
import Home from '../components/Home';
import * as actions from "../store/actions";

const mapStateToProps = state => ({
    isPreview: state.form.isPreview,
    title: state.form.title,
});

const mapDispatchToProps = dispatch => ({
    updateFormTitle: title => dispatch(actions.updateFormTitle(title)),
    viewPreview: () => dispatch(actions.viewPreview()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);