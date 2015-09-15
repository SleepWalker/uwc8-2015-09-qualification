import React from 'react';

import preferences from 'services/preferences';
import favorites from 'services/favorites';

export default class Filter extends React.Component {
    state = {
        filter: preferences.get('fitler')
    }

    render() {
        var {filter} = this.state;

        return (
            <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="switch-favorites">
                <input type="checkbox" ref="switch" id="switch-favorites" className="mdl-switch__input" onChange={this.onToggleFilter} checked={filter=='favorite'} />
                <span className="mdl-switch__label">
                    <span className="material-icons">favorite</span>
                </span>
            </label>
        );
    }

    componentDidMount() {
        preferences.on(this.sync);
        window.addEventListener('keyup', this.onHotKey);
        componentHandler.upgradeAllRegistered()
    }

    componentDidUpdate() {
        componentHandler.upgradeAllRegistered()
    }

    componentWillUnmount() {
        preferences.off(this.sync);
        window.removeEventListener('keyup', this.onHotKey);
        this.setFilter('all');
    }

    sync = () => {
        this.setState({
            filter: favorites.isEmpty() ? 'all' : preferences.get('filter')
        })
    }

    onToggleFilter = (event) => {
        this.toggleFilter();
    }

    toggleFilter() {
        this.setFilter(this.state.filter == 'favorite' ? 'all' : 'favorite');
    }

    setFilter(filter) {
        preferences.set({filter});
    }

    onHotKey = (event) => {
        switch(event.keyCode) {
            case 13: // enter
                React.findDOMNode(this.refs.switch).click(); // using click to trigger change event for material plugin
                break;
        }
    }
}
