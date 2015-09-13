import React from 'react';

export default class Filter extends React.Component {
    render() {
        return <div className="filter">
            <button className="filter__item">all</button>
            <button className="filter__item">favorite</button>
        </div>;
    }
}
