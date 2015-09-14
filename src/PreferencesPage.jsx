import React from 'react';

export default class PreferencesPage extends React.Component {
    state = {
        width: this.props.initialWidth,
        height: this.props.initialHeight
    }

    render() {
        var {width, height} = this.state;

        return (
            <div className="preferences">
                <div className="preferences__row">
                    <label htmlFor="preference-width">Width:</label>
                    <input type="text" id="preference-width" onChange={this.onWidthChage} value={width} />
                    <a href="#" onClick={this.onFlipSize}>flip</a>
                </div>
                <div className="preferences__row">
                    <label htmlFor="preference-height">Height:</label>
                    <input type="text" id="preference-height" onChange={this.onHeightChage} value={height} />
                </div>
            </div>
        );
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

    flipSize() {
        this.setState({
            width: this.state.height,
            height: this.state.width
        }, this.onSizeChange);
    }

    onSizeChange = () => {
        this.props.onSizeChange({
            width: this.state.width,
            height: this.state.height
        })
    }
}
