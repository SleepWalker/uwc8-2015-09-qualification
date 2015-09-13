import React from 'react';
import Filter from 'Filter.jsx';
import PhotoViewer from 'PhotoViewer.jsx';
import CategoryMenu from 'CategoryMenu.jsx';
import PhotoCollection from 'store/PhotoCollection';

export default class PhotosPage extends React.Component {
    state = {
        photos: new PhotoCollection()
    }

    render() {
        var {photos} = this.state;

        return <div className="photos">
            <Filter />
            <PhotoViewer photos={photos} />
            <CategoryMenu />
        </div>;
    }
}
