import React from 'react';

export default class CategoryMenu extends React.Component {
    render() {
        return <div className="category">
            <select name="category">
                <option value="abstract">Abstract</option>
                <option value="animals">Animals</option>
                <option value="business">Business</option>
                <option value="cats">Cats</option>
                <option value="city">City</option>
                <option value="food">Food</option>
                <option value="nightlife">Nightlife</option>
                <option value="fashion">Fashion</option>
                <option value="people">People</option>
                <option value="nature">Nature</option>
                <option value="sports">Sports</option>
                <option value="technics">Technics</option>
                <option value="transport">Transport</option>
                <option value="technics">Technics</option>
            </select>
        </div>;
    }
}
