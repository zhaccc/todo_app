export const setVisibilityFilter = (filter) => {

    return ({
        type: 'SET_VISIBILITY_FILTER',
        filter
    })
};

export const addNewTodo = (text) => {

    return ({
        type: 'ADD_TODO',
        text: text});
};

export const removeTodo = (id) => {
    return ({
        type: 'REMOVE_TODO',
        id
    })
};

export const toggleTodo = (id) => {
    // todos reducer array.map-s through list of all reducers
    // and calls toggle from todo reducer
    // on to-do with the same id -> see todos reducer
    return ({
        type: 'TOGGLE_TODO',
        id
    })
};
