import React from 'react';

export default class PreferencesPage extends React.Component {
    render() {
        var {initialWidth, initialHeight} = this.props;

        return (
            <div className="preferences">
                <div className="preferences__row">
                    <label htmlFor="preference-width">Width:</label>
                    <input type="text" id="preference-width" onChange={this.onWidthChage} defaultValue={initialWidth} />
                </div>
                <div className="preferences__row">
                    <label htmlFor="preference-height">Height:</label>
                    <input type="text" id="preference-height" onChange={this.onHeightChage} defaultValue={initialHeight} />
                </div>
            </div>
        );
    }

    onWidthChage = (event) => {
        this.setState({
            width: event.target.value*1
        }, this.onSizeChange);
    }

    onHeightChage = (event) => {
        this.setState({
            height: event.target.value*1
        }, this.onSizeChange);
    }

    onSizeChange() {
        this.props.onSizeChange({
            width: this.state.width,
            height: this.state.height
        })
    }
}
