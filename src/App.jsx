import React from 'react';

import PhotosPage from 'PhotosPage.jsx';
import PreferencesPage from 'PreferencesPage.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div className="demo-layout-transparent mdl-layout mdl-js-layout">
              <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">Preferences</span>
                <PreferencesPage />

                <span className="mdl-layout-title">Shortcuts</span>
                <ul>
                    <li>left/right — change photos</li>
                    <li>up/down — change category</li>
                    <li>shift — add to favorites</li>
                    <li>enter — fitler favorites</li>
                </ul>
              </div>
              <div className="mdl-layout__content">
                <PhotosPage />
              </div>
            </div>
        );
    }
}
