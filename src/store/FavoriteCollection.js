import PhotoCollection from './PhotoCollection';

export default class FavoriteCollection extends PhotoCollection {
    photos = []
    length = 0

    constructor(options) {
        options = options || {};
        options.category = 'favorite';

        super(options);
    }

    add(src) {
        this.photos.push(src);
        this.length = this.photos.length;
    }

    remove(src) {
        this.photos = this.photos.filter((curSrc) => curSrc !== src);
        this.length = this.photos.length;
    }

    has(src) {
        return this.photos.indexOf(src) != -1;
    }

    getSrc() {
        return this.photos[this.index];
    }
}
