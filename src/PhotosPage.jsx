import React from 'react';

import Filter from 'Filter.jsx';
import PhotoViewer from 'PhotoViewer.jsx';
import CategoryMenu from 'CategoryMenu.jsx';
import PhotoCollection from 'store/PhotoCollection';
import favorites from 'services/favorites';

const DEFAULT_CATEGORY = 'sports';

export default class PhotosPage extends React.Component {
    state = {
        photos: new PhotoCollection({
            category: DEFAULT_CATEGORY,
            width: this.props.initialWidth,
            height: this.props.initialHeight
        }),
        filter: 'all',
        favorites: favorites.instance()
    }

    render() {
        var {photos, filter, favorites} = this.state;

        if (filter == 'favorite') {
            favorites.width = photos.width;
            favorites.height = photos.height;
            photos = favorites;
        }

        return <div className="photos">
            {favorites.length ? <Filter onChange={this.setFilter} /> : ''}
            <PhotoViewer photos={photos} ref="viewer" />
            <CategoryMenu initialCategory={photos.category} onChange={this.setCategory} />
        </div>;
    }

    setCategory = (category) => {
        this.setState({
            photos: this.state.photos.new({category, index: 1})
        });
    }

    setSize = (size) => {
        this.setState({
            photos: this.state.photos.new(size)
        });
    }

    setFilter = (filter) => {
        this.setState({filter});
    }
}
