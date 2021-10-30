import * as actionTypes from '../actionTypes/form';
import _ from 'lodash';

const initialState = {
    isPreview: false,
    title: '',
    formComposition: [],
};

const viewPreview = (state, action) => ({
    ...state,
    isPreview: !state.isPreview,
})

const updateFormTitle = (state, action) => ({
    ...state,
    title: action.payload.title,
})

const addNewFormElement = (state, action) => {
    const newFormComposition = [...state.formComposition];
    newFormComposition.push(action.payload.elementType);

    return {
        ...state,
        formComposition: newFormComposition,
    }
};

const deleteFormElement = (state, action) => {
    const newFormComposition = [...state.formComposition];
    _.remove(newFormComposition, e => e.id === action.payload.elementId);
    return {
        ...state,
        formComposition: newFormComposition,
    }
};

const addNewTickBox = (state, action) => {
    const newFormComposition = [...state.formComposition];
    const currentTickBoxIndex = _.findIndex(newFormComposition, e => e.id === action.payload.elementId);
    newFormComposition[currentTickBoxIndex].values.push({id: action.payload.tickBoxId, tick: false, value: ''});
    return {
        ...state,
        formComposition: newFormComposition,
    }
}

const deleteTickBox = (state, action) => {
    const newFormComposition = [...state.formComposition];
    const currentTickBoxIndex = _.findIndex(newFormComposition, e => e.id === action.payload.elementId);
    _.remove(newFormComposition[currentTickBoxIndex].values, e => e.id === action.payload.tickBoxId);
    return {
        ...state,
        formComposition: newFormComposition,
    }
}

const updateTitleText = (state, action) => {
    const newFormComposition = [...state.formComposition];
    const currentElementIndex = _.findIndex(newFormComposition, e => e.id === action.payload.elementId);
    newFormComposition[currentElementIndex].title = action.payload.title;
    return {
        ...state,
        formComposition: newFormComposition,
    }
}

export const updateTickBoxText = (state, action) => {
    const newFormComposition = [...state.formComposition];
    const currentElementIndex = _.findIndex(newFormComposition, e => e.id === action.payload.elementId);
    const newTickBox = newFormComposition[currentElementIndex];
    const currentTickBoxIndex = _.findIndex(newTickBox.values, e => e.id === action.payload.tickBoxId);
    newFormComposition[currentElementIndex].values[currentTickBoxIndex].value = action.payload.title;
    return {
        ...state,
        formComposition: newFormComposition,
    }
}

const updateTickBoxValue = (state, action) => {
    const newFormComposition = [...state.formComposition];
    const currentElementIndex = _.findIndex(newFormComposition, e => e.id === action.payload.elementId);
    const newTickBox = newFormComposition[currentElementIndex];
    const currentTickBoxIndex = _.findIndex(newTickBox.values, e => e.id === action.payload.tickBoxId);
    newFormComposition[currentElementIndex].values[currentTickBoxIndex].tick = !newFormComposition[currentElementIndex].values[currentTickBoxIndex].tick;
    return {
        ...state,
        formComposition: newFormComposition,
    }
}

const updateTextAreaValue = (state, action) => {
    const newFormComposition = [...state.formComposition];
    const currentElementIndex = _.findIndex(newFormComposition, e => e.id === action.payload.elementId);
    newFormComposition[currentElementIndex].contentValue = action.payload.textValue;
    return {
        ...state,
        formComposition: newFormComposition,
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.VIEW_PREVIEW:
            return viewPreview(state, action);
        case actionTypes.UPDATE_FORM_TITLE:
            return updateFormTitle(state, action);
        case actionTypes.ADD_NEW_FORM_ELEMENT:
            return addNewFormElement(state, action);
        case actionTypes.DELETE_FORM_ELEMENT:
            return deleteFormElement(state, action);
        case actionTypes.ADD_NEW_TICK_BOX:
            return addNewTickBox(state, action);
        case actionTypes.DELETE_TICK_BOX:
            return deleteTickBox(state, action);
        case actionTypes.UPDATE_TITLE_TEXT:
            return updateTitleText(state, action);
        case actionTypes.UPDATE_TICK_BOX_TEXT:
            return updateTickBoxText(state, action);
        case actionTypes.UPDATE_TICK_BOX_VALUE:
            return updateTickBoxValue(state, action);
        case actionTypes.UPDATE_TEXT_AREA_VALUE:
            return updateTextAreaValue(state, action);
        default:
            return state;
    }
};