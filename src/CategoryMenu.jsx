import React from 'react';
import preferences from 'services/preferences';

export default class CategoryMenu extends React.Component {
    state = {
        categories: [
            'abstract',
            'animals',
            'business',
            'cats',
            'city',
            'food',
            'nightlife',
            'fashion',
            'people',
            'nature',
            'sports',
            'technics',
            'transport'
        ]
    }

    render() {
        var {categories} = this.state;

        categories = categories.map(function(categorie) {
            return (
                <option value={categorie} key={'c_' + categorie}>
                    {categorie}
                </option>
            );
        });

        return (
            <div className="category">
                <select ref="category" defaultValue={this.props.initialCategory} onChange={this.onChange}>
                    {categories}
                </select>
            </div>
        );
    }

    onChange = (event) => {
        var category = React.findDOMNode(this.refs.category).value;

        preferences.set({category});
    }
}
