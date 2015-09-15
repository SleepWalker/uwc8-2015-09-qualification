import React from 'react';

import favorites from 'services/favorites';
import photos from 'services/photos';
import preferences from 'services/preferences';

import Filter from 'Filter.jsx';
import CategoryMenu from 'CategoryMenu.jsx';


export default class PhotosPage extends React.Component {
    state = {
        photos
    }

    constructor(props) {
        super(props);

        preferences.on(this.update);
    }

    componentWillUnmount() {
        preferences.off(this.update);
    }

    update = this.forceUpdate.bind(this)

    render() {
        var {photos} = this.state;
        var {width, height} = photos;
        var src = photos.getSrc();

        var isFavorite = this.isFavorite(src);

        return <div className="photos">
            {!favorites.isEmpty() ? <Filter onChange={this.setFilter} /> : ''}
            <div className="photo-viewer">
                <div className="photos-viewer__photo" style={{width, height}}>
                    <img src={src} />
                </div>

                <div className="photo-viewer__controls">
                    <button className="control control--prev" onClick={this.prev}>
                        prev
                    </button>
                    <button className="control control--next" onClick={this.next}>
                        next
                    </button>
                    <button className="control control--favorite" onClick={this.onToggleFavorite}>
                        {isFavorite ? 'unfavorite' : 'favorite'}
                    </button>
                </div>
            </div>
            {photos.category != 'favorites' ? <CategoryMenu initialCategory={photos.category} /> : ''}
        </div>;
    }

    next = this.switchTo.bind(this, 'next')

    prev = this.switchTo.bind(this, 'prev')


    switchTo(direction) {
        var src = this.state.photos[direction]();

        if (src) {
            this.setState({
                isFavorite: this.isFavorite(src)
            });
        }
    }

    setFilter = (filter) => {
        this.setState({
            photos: filter == 'favorite' ? favorites : photos
        })

        preferences.set({filter});
    }

    isFavorite(src) {
        src = src;

        return favorites.has(src);
    }

    onToggleFavorite = () => {
        this.toggleFavorite(this.state.photos.getSrc());
    }

    toggleFavorite = (src) => {
        if (favorites.has(src)) {
            favorites.remove(src);
        } else {
            favorites.add(src);
        }

        this.setState({
            isFavorite: favorites.has(src)
        });
    }
}
