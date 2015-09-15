import PhotoCollection from 'store/PhotoCollection';
import preferences from 'services/preferences';

var photos = new PhotoCollection({
    category: preferences.get('category'),
    width: preferences.get('width'),
    height: preferences.get('height')
});

preferences.on(function() {
    var attributes = preferences.getAttributes();
    if (attributes.category != photos.category) {
        attributes.index = 0;
    }

    Object.assign(photos, attributes);
});

export default photos;
