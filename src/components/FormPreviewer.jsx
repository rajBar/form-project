import React, {Component} from 'react';
import * as CONSTS from '../utils/consts/formElementTypes';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {cleanObjectForUser} from "../utils/helpers/objectOperations";

class FormPreviewer extends Component {

    updateTextValue(elementId, event) {
        const { updateTextAreaValue } = this.props;
        updateTextAreaValue(elementId, event.target.value);
    }

    renderComponent(element, index) {
        const { updateTickBoxValue } = this.props

        if (element.element === CONSTS.TEXT_AREA) {
            return (
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>{index}. {element.title}</Form.Label>
                    <Form.Control as="textarea" rows={3} value={element.contentValue} onChange={(event) => this.updateTextValue(element.id, event)} />
                </Form.Group>
            )
        } else if (element.element === CONSTS.TICK_BOX) {
            return (
                <div style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '300px'}}>
                    <Form>
                        <Form.Label>{index}. {element.title}</Form.Label>
                        <div key={'checkbox'} className="mb-3">
                            {element.values.map(value => (
                                    <Form.Check
                                        label={value.value}
                                        onChange={() => updateTickBoxValue(element.id, value.id)}
                                        checked={value.tick}
                                    />
                                )
                            )}
                        </div>
                    </Form>
                </div>
            )
        } else {
            return <div />
        }
    }

    copyContents() {
        const { everything } = this.props;
        const forClip = cleanObjectForUser({...everything})
        navigator.clipboard.writeText(JSON.stringify(forClip));
    }

    openNewTab() {
        window.open("https://jsonformatter.org/json-parser");
    }

    render() {
        const { title, formElements } = this.props;

        return (
            <div>
                <h3>{title}</h3>
                {formElements.length > 0 ? formElements.map((element, i) => this.renderComponent(element, i+1)) : <h3>Create some forms!</h3>}
                <br />
                <Button variant="info" onClick={() => this.copyContents()}>Copy JSON to Clip</Button>
                <br />
                <br />
                <Button variant="info" onClick={() => this.openNewTab()}>Open JSON Parser Website</Button>
            </div>
        )
    }
}

export default FormPreviewer;
