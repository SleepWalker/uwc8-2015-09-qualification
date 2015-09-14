export default class PhotoCollection {
    constructor({category, width = 480, height = 640, index = 1}) {
        this.category = category;
        this.width = width;
        this.height = height;
        this.index = index;
    }

    next() {
        if (this.index < 10) {
            this.index++;
            return this.getSrc();
        } else {
            return '';
        }
    }

    prev() {
        if (this.index > 1) {
            this.index--;
            return this.getSrc();
        } else {
            return '';
        }
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
