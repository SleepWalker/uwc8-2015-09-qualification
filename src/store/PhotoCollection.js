export default class PhotoCollection {
    constructor({category, width = 480, height = 640, index = 0}) {
        this.category = category;
        this.width = width;
        this.height = height;
        this.index = index;
    }

    length = 10

    next() {
        if (this.hasNextPage()) {
            this.index++;
            return this.getSrc();
        } else {
            return false;
        }
    }

    prev() {
        if (this.hasPrevPage()) {
            this.index--;
            return this.getSrc();
        } else {
            return false;
        }
    }

    hasNextPage() {
        return this.index < this.length;
    }

    hasPrevPage() {
        return this.index > 0;
    }

    isEmpty() {
        return this.photos.length === 0;
    }

    new(options) {
        return new PhotoCollection(Object.assign({}, this, options));
    }

    getSrc() {
        return 'http://lorempixel.com/' + [
            this.width,
            this.height,
            this.category,
            this.index + 1
        ].join('/')
    }
}
