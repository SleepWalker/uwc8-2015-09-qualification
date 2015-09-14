import React from 'react';

export default class MainNav extends React.Component {
    render() {
        return <nav className="main-nav">
            <a className="main-nav__item" onClick={this.doChange('photos')} href="#">Photos</a>
            <a className="main-nav__item" onClick={this.doChange('preferences')} href="#">Preferences</a>
        </nav>;
    }

    doChange = (page) => {
        return (event) => {
            event.preventDefault();

            this.props.onChange(page);
        }
    }
}
