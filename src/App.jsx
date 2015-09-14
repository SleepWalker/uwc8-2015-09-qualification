import React from 'react';
import MainNav from 'MainNav.jsx';
import PhotosPage from 'PhotosPage.jsx';
import PreferencesPage from 'PreferencesPage.jsx';

// TODO: code comments
// TODO: code tests
// TODO: preferences model

export default class App extends React.Component {
    state = {
        page: 'photos',
        width: 640,
        height: 480
    }

    render() {
        var {width, height} = this.state;

        return <div className="app">
            <MainNav onChange={this.changePage} />
            {
                this.state.page == 'photos'
                ? <PhotosPage initialWidth={width} initialHeight={height} />
                : <PreferencesPage initialWidth={width} initialHeight={height} onSizeChange={this.onSizeChange} />
            }
        </div>;
    }

    onSizeChange = (size) => {
        if (this.refs.photos) {
            this.refs.photos.setSize(size);
        }

        this.setState({
            width: size.width,
            height: size.height
        })
    }

    changePage = (page) => {
        this.setState({page});
    }
}
