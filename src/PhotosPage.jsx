import React from 'react';

import favorites from 'services/favorites';
import photos from 'services/photos';
import preferences from 'services/preferences';

import Filter from 'Filter.jsx';
import CategoryMenu from 'CategoryMenu.jsx';


export default class PhotosPage extends React.Component {
    state = {}

    componentWillMount() {
        this.sync();
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
    }


    sync = (isInit) => {
        var curPhotos = preferences.get('filter') == 'favorite' ? favorites : photos;
        var src = curPhotos.getSrc();

        this.setState({
            photos: curPhotos,
            src,
            isFavorite: this.isFavorite(src),
            category: preferences.get('category'),
            height: preferences.get('height'),
            width: preferences.get('width')
        });
    }

    render() {
        var {width, height, src, isFavorite, category} = this.state;

        return (
            <div className="photo-viewer mdl-card mdl-shadow--2dp">
                <div className="photos-viewer__photo" style={{width, height}}>
                    <img src={src} />
                </div>

                <div className="photo-viewer__actions mdl-card__actions mdl-card--border">
                    <span className="action">
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onClick={this.prev}>
                            prev
                        </button>
                    </span>
                    <span className="action">
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onClick={this.next}>
                            next
                        </button>
                    </span>
                    <span className="action">
                        {category != 'favorites' ? <CategoryMenu initialCategory={category} /> : ''}
                    </span>
                    <span className="action action--filter">
                        {!favorites.isEmpty() ? <Filter /> : ''}
                    </span>
                </div>

                <div className="mdl-card__menu">
                    <button onClick={this.onToggleFavorite} id="favorite" className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                        <span className="material-icons">{isFavorite ? 'favorite' : 'favorite_border'}</span>
                    </button>
                </div>
            </div>
        );
    }

    next = this.switchTo.bind(this, 'next')

    prev = this.switchTo.bind(this, 'prev')

    switchTo(direction) {
        var src = this.state.photos[direction]();

        if (src) {
            this.setState({
                isFavorite: this.isFavorite(src),
                src
            });
        }
    }

    isFavorite(src) {
        return favorites.has(src);
    }

    onToggleFavorite = () => {
        this.toggleFavorite();
    }

    toggleFavorite = () => {
        var src = this.state.src;
        if (favorites.has(src)) {
            favorites.remove(src);
        } else {
            favorites.add(src);
        }

        if (favorites.isEmpty()) {
            preferences.set('all');
        }

        this.setState({
            isFavorite: favorites.has(src)
        });
    }

    onHotKey = (event) => {
        switch(event.keyCode) {
            case 37: // left
                this.prev();
                break;
            case 39: // right
                this.next();
                break;
            case 16: // shift
                this.toggleFavorite();
                break;
        }
    }
}
