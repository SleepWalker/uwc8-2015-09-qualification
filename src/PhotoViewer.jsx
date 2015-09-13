import React from 'react';

export default class PhotoViewer extends React.Component {
    state = {
        url: this.props.photos.next()
    }

    constructor(props) {
        super(props);

        this.photos = this.props.photos;
    }

    render() {
        var {url} = this.state;

        return (
            <div className="photo-viewer">
                <img src={url} />

                <div className="photo-viewer__controls">
                    <button className="control control--prev" onClick={this.prev}>prev</button>
                    <button className="control control--next" onClick={this.next}>next</button>
                </div>
            </div>
        );
    }

    next = this.switchTo.bind(this, 'next')

    prev = this.switchTo.bind(this, 'prev')

    switchTo(direction) {
        var url = this.photos[direction]();

        if (url) {
            this.setState({
                url
            });
        }
    }

    setPhotos(photos) {
        this.photos = photos;
        this.next();
    }
}
