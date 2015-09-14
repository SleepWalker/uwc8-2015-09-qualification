import React from 'react';

export default class Filter extends React.Component {
    render() {
        return <div className="filter">
            <button className="filter__item" onClick={this.doChange('all')}>all</button>
            <button className="filter__item" onClick={this.doChange('favorite')}>favorite</button>
        </div>;
    }

    doChange = (filter) => {
        return (event) => {
            this.props.onChange(filter);
        };
    }
}
