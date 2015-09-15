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
        ],
        category: this.props.initialCategory
    }

    componentDidMount() {
        window.addEventListener('keyup', this.onHotKey);
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.onHotKey);
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
            <select className="category" ref="category" value={this.state.category} onChange={this.onChange}>
                {categories}
            </select>
        );
    }

    onChange = (event) => {
        var category = React.findDOMNode(this.refs.category).value;
        this.setCategory(category);
    }

    setCategory(category) {
        this.setState({category});

        preferences.set({category});
    }

    onHotKey = (event) => {
        if (event.keyCode != 38 && event.keyCode != 40) {
            return;
        }

        var index = this.state.categories.indexOf(this.state.category);
        var category;


        switch(event.keyCode) {
            case 38: // up
                category = this.state.categories[index-1];
                break;
            case 40: // down
                category = this.state.categories[index+1];
                break;
        }

        if (!category) {
            category = this.state.category;
        }

        this.setCategory(category);
    }
}
