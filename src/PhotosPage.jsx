import React from 'react';
import Filter from 'Filter.jsx';
import PhotoViewer from 'PhotoViewer.jsx';
import CategoryMenu from 'CategoryMenu.jsx';

export default class PhotosPage extends React.Component {
    render() {
        return <div className="photos">
            <Filter />
            <PhotoViewer />
            <CategoryMenu />
        </div>;
    }
}
