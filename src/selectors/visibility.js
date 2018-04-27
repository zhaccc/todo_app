// not a reducer this is actually a helper function
// with logic to filter our todos
// check App.js to see it in action
const getVisibilityFilter = (
    todos,
    filter
) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            // Use the `Array.filter()` method
            return todos.filter(
                t => t.completed
            );
        case 'SHOW_ACTIVE':
            return todos.filter(
                t => !t.completed
            );
        default:
            return todos;
    }
};

export default getVisibilityFilter;
