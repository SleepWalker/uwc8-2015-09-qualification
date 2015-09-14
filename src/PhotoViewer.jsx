import React from 'react';

import favorites from 'services/favorites';

export default class PhotoViewer extends React.Component {
    state = {
        src: this.props.photos.getSrc(),
        favorites: favorites.instance()
    }

    componentWillReceiveProps(newProps) {
        var src = newProps.photos.getSrc();
        this.setState({
            src,
            isFavorite: this.isFavorite(src)
        });
    }

    render() {
        var {src, isFavorite} = this.state;
        var {width, height} = this.props.photos;

        return (
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
        );
    }

    next = this.switchTo.bind(this, 'next')

    prev = this.switchTo.bind(this, 'prev')

    switchTo(direction) {
        var src = this.props.photos[direction]();

        if (src) {
            this.setState({
                src,
                isFavorite: this.isFavorite(src)
            });
        }
    }

    isFavorite(src) {
        src = src || this.state.src;

        return this.state.favorites.has(src);
    }

    onToggleFavorite = () => {
        this.toggleFavorite(this.state.src);
    }

    toggleFavorite = (src) => {
        if (this.state.favorites.has(src)) {
            this.state.favorites.remove(src);
        } else {
            this.state.favorites.add(src);
        }

        this.setState({
            isFavorite: this.isFavorite()
        });
    }
}
