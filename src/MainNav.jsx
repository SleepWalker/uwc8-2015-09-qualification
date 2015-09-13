import React from 'react';

export default class MainNav extends React.Component {
    render() {
        return <nav className="main-nav">
            <a className="main-nav__item" href="#photos">Photos</a>
            <a className="main-nav__item" href="#preferences">Preferences</a>
        </nav>;
    }
}
