// helper function to enable passing an object
//with the action.type as the key and the reducer function as the value

export const createReducer = (initialstate={}, actionHandlerkeyfunc = {}) => {

    return (state = initialstate,action) => {

        const actionHandler = actionHandlerkeyfunc[action.type];
        return actionHandler ? actionHandler(state,action): state;
    }
};