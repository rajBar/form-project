import React, {Component} from 'react';
import * as uuid from 'uuid';
import * as formElementTypes from '../utils/consts/formElementTypes';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import FormConfigure from "../containers/FormConfigure";
import './formBuilder.css';

class FormBuilder extends Component {

    addingNewFormElement(formType) {
        const { addNewFormElement } = this.props;
        const id = uuid.v4();
        const baseFormElement = {
            id,
            element: formType
        };

        let formElement
        if (formType === formElementTypes.TEXT_AREA) {
            formElement = {
                ...baseFormElement,
                title: '',
                contentValue: '',
            }
        } else if (formType === formElementTypes.TICK_BOX) {
            const tickBoxId = uuid.v4();
            formElement = {
                ...baseFormElement,
                title: '',
                values: [{id: tickBoxId, tick: false, value: ''}],
            }
        } else {
            formElement = {...baseFormElement}
        }

        addNewFormElement(formElement);
    }

    render() {
        return (
            <div className={'form-builder'}>
                <FormConfigure />
                <DropdownButton id="dropdown-basic-button" title="Add form element">
                    <Dropdown.Item onClick={() => this.addingNewFormElement(formElementTypes.TEXT_AREA)}>Text Area</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.addingNewFormElement(formElementTypes.TICK_BOX)}>Tick Box</Dropdown.Item>
                </DropdownButton>
            </div>
        )
    }
}

export default FormBuilder;
