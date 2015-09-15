import React from 'react';

import preferences from 'services/preferences';

export default class PreferencesPage extends React.Component {
    state = {
        width: preferences.get('width'),
        height: preferences.get('height')
    }

    render() {
        var {width, height} = this.state;

        return (
            <div className="preferences">
                <div className="preferences__row">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="preference-width" onChange={this.onWidthChage} value={width} />
                        <label className="mdl-textfield__label" htmlFor="preference-width">Width</label>
                    </div>
                </div>
                <div className="preferences__row">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="preference-height" onChange={this.onHeightChage} value={height} />
                        <label className="mdl-textfield__label" htmlFor="preference-height">Height</label>
                    </div>
                </div>
                <div className="preferences__row">
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.onFlipSize}>
                        <span className="material-icons">autorenew</span> Flip sides
                    </button>
                </div>
                <div className="preferences__row">
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onClick={this.onFitScreen}>
                        <span className="material-icons">fullscreen</span> Fit screen size
                    </button>
                </div>
            </div>
        );
    }

    componentDidMount() {
        componentHandler.upgradeAllRegistered()
    }

    componentDidUpdate() {
        componentHandler.upgradeAllRegistered()
    }

    onWidthChage = (event) => {
        var value = event.target.value*1;
        if (!(value > 0)) {
            return;
        }

        this.setState({
            width: value
        }, this.onSizeChange);
    }

    onHeightChage = (event) => {
        var value = event.target.value*1;
        if (!(value > 0)) {
            return;
        }

        this.setState({
            height: value
        }, this.onSizeChange);
    }

    onFlipSize = (event) => {
        event.preventDefault();

        this.flipSize();
    }

    onFitScreen = (event) => {
        event.preventDefault();

        this.fitSCreen();
    }

    flipSize() {
        this.setState({
            width: this.state.height,
            height: this.state.width
        }, this.onSizeChange);
    }

    fitSCreen() {
        this.setState({
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }, this.onSizeChange);
    }

    onSizeChange = () => {
        preferences.set({
            width: this.state.width,
            height: this.state.height
        })
    }
}
