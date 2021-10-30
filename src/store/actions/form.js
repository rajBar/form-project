import * as actionTypes from '../actionTypes/form';

export const viewPreview = () => ({
    type: actionTypes.VIEW_PREVIEW,
    payload: {},
})

export const updateFormTitle = title => ({
    type: actionTypes.UPDATE_FORM_TITLE,
    payload: { title },
})

export const addNewFormElement = elementType => ({
    type: actionTypes.ADD_NEW_FORM_ELEMENT,
    payload: { elementType },
});

export const deleteFormElement = elementId => ({
    type: actionTypes.DELETE_FORM_ELEMENT,
    payload: { elementId },
});

export const addNewTickBox = (elementId, tickBoxId) => ({
    type: actionTypes.ADD_NEW_TICK_BOX,
    payload: { elementId, tickBoxId },
})

export const deleteTickBox = (elementId, tickBoxId) => ({
    type: actionTypes.DELETE_TICK_BOX,
    payload: { elementId, tickBoxId },
})

export const updateTitleText = (elementId, title) => ({
    type: actionTypes.UPDATE_TITLE_TEXT,
    payload: { elementId, title },
})

export const updateTickBoxText = (elementId, tickBoxId, title) => ({
    type: actionTypes.UPDATE_TICK_BOX_TEXT,
    payload: { elementId, tickBoxId, title }
})

export const updateTickBoxValue = (elementId, tickBoxId) => ({
    type: actionTypes.UPDATE_TICK_BOX_VALUE,
    payload: { elementId, tickBoxId },
})

export const updateTextAreaValue = (elementId, textValue) => ({
    type: actionTypes.UPDATE_TEXT_AREA_VALUE,
    payload: { elementId, textValue },
})