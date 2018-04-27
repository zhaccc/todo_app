let todoId = 0;

const todo = (state, action) => {
    // this if statement was originally in 'TOGGLE_TODO'
    // we added it above to avoid duplicate code
    if (state && state.id !== action.id) {
        return state;
    }
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: todoId++,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

export default todo;
