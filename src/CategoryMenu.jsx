import React from 'react';

export default class CategoryMenu extends React.Component {
    state = {
        currentCategorie: this.props.initialCategory,
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
            'transport',
            'technics'
        ]
    }

    render() {
        var {currentCategorie, categories} = this.state;

        categories = categories.map(function(categorie) {
            return (
                <option value={categorie} selected={categorie == currentCategorie}>
                    {categorie}
                </option>
            );
        });

        return (
            <div className="category">
                <select ref="category" onChange={this.onChange}>
                    {categories}
                </select>
            </div>
        );
    }

    onChange = (event) => {
        var category = React.findDOMNode(this.refs.category).value;

        this.props.onChange(category);
    }
}
