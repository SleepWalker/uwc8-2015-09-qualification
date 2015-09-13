export default class PhotoCollection {
    constructor({category}) {
        this.category = category;
        this.index = 0;
    }

    next() {
        if (this.index < 10) {
            return this.getUrl(++this.index);
        } else {
            return '';
        }
    }

    prev() {
        if (this.index > 1) {
            return this.getUrl(--this.index);
        } else {
            return '';
        }
    }

    getUrl(index) {
        return `http://lorempixel.com/640/480/${this.category}/${index}`;
    }
}
