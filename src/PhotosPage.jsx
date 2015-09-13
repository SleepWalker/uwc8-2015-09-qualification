import React from 'react';
import Filter from 'Filter.jsx';
import PhotoViewer from 'PhotoViewer.jsx';
import CategoryMenu from 'CategoryMenu.jsx';
import PhotoCollection from 'store/PhotoCollection';

const DEFAULT_CATEGORY = 'sports';

export default class PhotosPage extends React.Component {
    state = {
        photos: new PhotoCollection({category: DEFAULT_CATEGORY}),
    }

    render() {
        var {photos} = this.state;

        return <div className="photos">
            <Filter />
            <PhotoViewer photos={photos} ref="viewer" />
            <CategoryMenu initialCategory={photos.category} onChange={this.changeCategory} />
        </div>;
    }

    changeCategory = (category) => {
        this.setState({
            photos: this.state.photos.new({category, index: 1})
        });
    }

    changeSize = (size) => {
        this.setState({
            photos: this.state.photos.new(size)
        });
    }
}
