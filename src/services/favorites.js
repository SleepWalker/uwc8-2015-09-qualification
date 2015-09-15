import FavoriteCollection from 'store/FavoriteCollection';
import preferences from 'services/preferences';

var favorites = new FavoriteCollection({
    width: preferences.get('width'),
    height: preferences.get('height')
});

preferences.on(function() {
    var attributes = preferences.getAttributes();
    // if (attributes.category != favorites.category) {
    //     attributes.index = 0;
    // }

    Object.assign(favorites, attributes);
});

export default favorites;
