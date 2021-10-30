import React, {Component} from 'react';
import Button from 'react-bootstrap/button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as uuid from 'uuid';
import * as formElementTypes from "../utils/consts/formElementTypes";
import './formConfigure.css'

class FormConfigure extends Component {

    renderDeleteButton(id) {
        const { deleteFormElement } = this.props;
        return <Button variant="outline-danger" onClick={() => deleteFormElement(id)}>X</Button>
    }

    updateTitle(elementId, title) {
        const { updateTitleText } = this.props;
        updateTitleText(elementId, title.target.value);
    }

    updateTickBoxTitle(elementId, tickBoxId, title) {
        const { updateTickBoxText } = this.props;
        updateTickBoxText(elementId, tickBoxId, title.target.value);
    }

    renderElement(element) {
        const { addNewTickBox, deleteTickBox } = this.props;

        if (element.element === formElementTypes.TEXT_AREA) {
            return (
                <div id={'parent-width'}>
                    <input placeholder="Text Area Title" value={element.title} onChange={(event) => this.updateTitle(element.id, event)} />{this.renderDeleteButton(element.id)}
                </div>
            )
        } else if (element.element === formElementTypes.TICK_BOX) {
            const tickBoxId = uuid.v4();
            return (
                <Row id={'parent-width'}>
                    <Col><input placeholder="Tick Box Title" value={element.title} onChange={(event) => this.updateTitle(element.id, event)} /></Col>
                    <Col>
                    {element.values.map((e, i) => {
                        if (element.values.length === i+1) {
                            return (
                                <div
                                    id={'parent-height'}>
                                    <span>
                                        <input placeholder={`Enter Tickbox ${i+1} value`} value={e.value} onChange={(event) => this.updateTickBoxTitle(element.id, e.id, event)} />
                                        {element.values.length > 1 && <Button onClick={() => deleteTickBox(element.id, e.id)} variant="outline-danger">X</Button>}
                                    </span>
                                    <Button onClick={() => addNewTickBox(element.id, tickBoxId)} variant="outline-success">+</Button>
                                </div>
                            )
                        } else {
                            return  (
                                <span>
                                    <input placeholder={`Enter Tickbox ${i+1} value`} value={e.value} onChange={(event) => this.updateTickBoxTitle(element.id, e.id, event)} />
                                    <Button onClick={() => deleteTickBox(element.id, e.id)} variant="outline-danger">X</Button>
                                </span>
                            )
                        }
                    })}
                    </Col>
                    <Col>{this.renderDeleteButton(element.id)}</Col>
                </Row>
            )
        }
        return null;
    }


    render() {
        const { formElements } = this.props;

        return (
            <div id={'parent-height'}>
                {formElements.map((e,i) => {
                    return (
                        <div>
                            {i+1}
                            {this.renderElement(e)}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FormConfigure;
