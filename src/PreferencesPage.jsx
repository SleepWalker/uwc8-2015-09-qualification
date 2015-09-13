import React from 'react';

export default class PreferencesPage extends React.Component {
    render() {
        return <div className="preferences">
            <div className="preferences__row">
                <label for="preference-width">Width:</label>
                <input type="text" name="width" id="preference-width" value="480" />
            </div>
            <div className="preferences__row">
                <label for="preference-height">Height:</label>
                <input type="text" name="height" id="preference-height" value="640" />
            </div>
        </div>;
    }
}
