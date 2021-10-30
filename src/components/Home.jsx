import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import FormBuilder from "../containers/FormBuilder";
import FormPreviewer from "../containers/FormPreviewer";

class Home extends Component {
    updateTitle(title) {
        const { updateFormTitle } = this.props;
        updateFormTitle(title.target.value);
    }

    render() {
        const { isPreview, viewPreview,  title } = this.props;

        return (
            <div>
                <h2>Form Builder</h2>
                <br />
                <input style={{marginBottom: '10px'}} placeholder={'Form Title'} value={title} onChange={(event) => this.updateTitle(event)} />
                <FormBuilder />
                <br />
                <br />
                <Button variant="secondary" onClick={() => viewPreview()}>{isPreview ? 'Hide' : 'Show'} Preview</Button>
                {isPreview && <FormPreviewer />}
            </div>
        )
    }
}

export default Home;
