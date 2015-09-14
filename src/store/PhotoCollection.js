export default class PhotoCollection {
    constructor({category, width = 480, height = 640, index = 1}) {
        this.category = category;
        this.width = width;
        this.height = height;
        this.index = index;
    }

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
        return this.index < 10;
    }

    hasPrevPage() {
        return this.index > 1;
    }

    new(options) {
        return new PhotoCollection(Object.assign({}, this, options));
    }

    getSrc() {
        return 'http://lorempixel.com/' + [
            this.width,
            this.height,
            this.category,
            this.index
        ].join('/')
    }
}
