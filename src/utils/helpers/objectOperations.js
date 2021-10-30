import * as CONSTS from '../consts/formElementTypes';

export const cleanObjectForUser = object => {
    delete object.isPreview;
    object.formComposition.forEach(element => {
        if (element.element === CONSTS.TICK_BOX) {
            element.values.forEach(e => delete e.id)
        }
        delete element.id;
    })
    return object;
}