import React from 'react';

export default class FilterLink extends React.Component {
    // when we dispatch set visibility filter,
    // (which we dispatch from todoActions.js,
    // actually from App.js but action creator is in the actions/todoActions)
    // visibility filter state changes
    // to state we pass through filter props (this.props.filter)
    // check app render method for more

    render () {
        // changes selected filter from link to span
        // see App.js where we call FilterLink component
        // to see this.props.currentFilter in use
        if (this.props.filter === this.props.currentFilter) {
            return (
                <span>{this.props.children}</span>
            )
        }
        return (
            <a role="button"
               tabIndex="0"
               style={{
                   textDecoration: 'underline overline',
                   color: 'blue'
               }}
               onClick={this.props.onClick}>
               {this.props.children}
            </a>
        )
    }
}
