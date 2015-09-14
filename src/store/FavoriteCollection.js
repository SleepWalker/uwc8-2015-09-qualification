import PhotoCollection from './PhotoCollection';

export default class FavoriteCollection extends PhotoCollection {
    photos = []

    constructor(options) {
        options = options || {};
        options.category = 'favorite';

        super(options);
    }

    add(src) {
        this.photos.push(src);
    }

    remove(src) {
        this.photos = this.photos.filter((curSrc) => curSrc !== src);
    }

    has(src) {
        return this.photos.indexOf(src) != -1;
    }

    hasPhotos() {
        return this.photos.length > 0;
    }

    getSrc() {
        return this.photos[this.index+1];
    }
}
