import FavoriteCollection from 'store/FavoriteCollection';

var favorites = new FavoriteCollection();

export default {
    instance() {
        return favorites;
    }
};
