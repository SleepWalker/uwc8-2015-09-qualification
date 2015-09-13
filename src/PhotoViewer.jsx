import React from 'react';

export default class PhotoViewer extends React.Component {
    render() {
        return <div className="photo-viewer">
            <img src="http://lorempixel.com/output/nature-q-c-640-480-10.jpg" />
            <div className="photo-viewer__controls">
                <button className="control control--prev">prev</button>
                <button className="control control--next">next</button>
            </div>
        </div>;
    }
}
