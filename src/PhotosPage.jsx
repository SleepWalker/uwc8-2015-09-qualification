import React from 'react';
import Filter from 'Filter.jsx';
import PhotoViewer from 'PhotoViewer.jsx';
import CategoryMenu from 'CategoryMenu.jsx';
import PhotoCollection from 'store/PhotoCollection';

const DEFAULT_CATEGORY = 'sports';

export default class PhotosPage extends React.Component {
    state = {
        photos: new PhotoCollection({category: DEFAULT_CATEGORY}),
        category: DEFAULT_CATEGORY
    }

    render() {
        var {photos, category} = this.state;

        return <div className="photos">
            <Filter />
            <PhotoViewer photos={photos} ref="viewer" />
            <CategoryMenu initialCategory={category} onChange={this.changeCategory} />
        </div>;
    }

    changeCategory = (category) => {
        this.refs.viewer.setPhotos(
            new PhotoCollection({category})
        );
    }
}
