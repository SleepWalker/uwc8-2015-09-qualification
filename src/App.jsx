import React from 'react';
import MainNav from 'MainNav.jsx';
import PhotosPage from 'PhotosPage.jsx';
import PreferencesPage from 'PreferencesPage.jsx';

export default class App extends React.Component {
    render() {
        return <div className="app">
            <MainNav />
            <PhotosPage />
            <PreferencesPage />
        </div>;
    }
}
