import React from 'react';
import MainNav from 'MainNav.jsx';
import PhotosPage from 'PhotosPage.jsx';
import PreferencesPage from 'PreferencesPage.jsx';

// TODO: code comments
// TODO: code tests

export default class App extends React.Component {
    state = {
        page: 'photos'
    }

    render() {
        return <div className="app">
            <MainNav onChange={this.changePage} />
            {
                this.state.page == 'photos'
                ? <PhotosPage />
                : <PreferencesPage />
            }
        </div>;
    }

    changePage = (page) => {
        this.setState({page});
    }
}
