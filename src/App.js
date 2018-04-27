import React, { Component } from 'react';
import { connect } from 'react-redux'
import FilterLink from './components/FilterLink'
import getVisibilityFilter from './selectors/visibility'
import * as todoAction from './actions/todoActions'
import './App.css';

class App extends Component {
    state = {
        text: ''
    };

    handleInputChange = (e) => (
        this.setState({text: e.target.value})
    );

    handleAddTodo = () => {
        // if there is no text, empty todo
        // wont be added
        if (this.state.text) {
            this.props.dispatch(
                todoAction.addNewTodo(this.state.text)
            )
        }
        this.setState({text: ''})
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleAddTodo()
        }
    };

    render() {
        // here we use our getVisibilityFilter selector function
        // and we take a list of todos through this.props.state.todos
        // and we take filter state and return only todos that correspond
        // that filter ie. todos that have there completed value false
        // in render() below we map const visible todos with only todos that are filtered
        const visibleTodos = getVisibilityFilter(
            this.props.state.todos,
            this.props.state.visibilityFilter
        );
        return (
            <div className="App">
                <input
                    onChange={this.handleInputChange}
                    onKeyPress={this.handleKeyPress}
                    value={this.state.text}>
                </input>
                <button
                    onClick={this.handleAddTodo}>
                    Add TODO
                </button>
                <ul>
                    {visibleTodos.map(value =>
                        <li key={value.id}
                            onClick={() =>
                                this.props.dispatch(
                                    todoAction.toggleTodo(value.id)
                                )
                            }
                            style={{textDecoration: value.completed ? 'line-through' : 'none'}}>
                            {value.text}
                            <button
                                onClick={() =>
                                    this.props.dispatch(
                                        todoAction.removeTodo(value.id)
                                    )
                                }>
                                x
                            </button>
                        </li>
                    )}
                </ul>
                <p>
                    Show:
                    {' '}
                    <FilterLink
                        // filter is the filter we pass through this.filter.props
                        // to visibility filter reducer through 'SET_VISIBILITY_FILTER' action
                        // see set filter in components/FilterLink
                        filter='SHOW_ALL'
                        // current filter is used to save state of visibility filter so we can
                        // turn anchor link to span so its not clickable
                        currentFilter={this.props.state.visibilityFilter}
                        onClick={() =>
                            this.props.dispatch(
                                todoAction.setVisibilityFilter('SHOW_ALL')
                            )
                        }
                    >
                        All
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter='SHOW_ACTIVE'
                        currentFilter={this.props.state.visibilityFilter}
                        onClick={() =>
                            this.props.dispatch(
                                todoAction.setVisibilityFilter('SHOW_ACTIVE')
                            )
                        }
                    >
                        Active
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter='SHOW_COMPLETED'
                        currentFilter={this.props.state.visibilityFilter}
                        onClick={() =>
                            this.props.dispatch(
                                todoAction.setVisibilityFilter('SHOW_COMPLETED')
                            )
                        }
                    >
                        Completed
                    </FilterLink>
                </p>
            </div>
        );
    }
}

export default connect(state => ({
    state: state,
}))(App);
