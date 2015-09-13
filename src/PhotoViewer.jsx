import React from 'react';

export default class PhotoViewer extends React.Component {
    state = {
        url: this.props.photos.getUrl()
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            url: newProps.photos.getUrl()
        });
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
        var url = this.props.photos[direction]();

        if (url) {
            this.setState({
                url
            });
        }
    }
}
