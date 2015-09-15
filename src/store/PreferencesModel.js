export default class PreferencesModel {
    listeners = [];
    attributes = {
        width: 640,
        height: 480,
        filter: 'all',
        category: 'sports'
    }

    get(key) {
        return this.attributes[key];
    }

    set(attributes) {
        var changed = Object.keys(this.attributes).filter((key) => {
            return this[key] !== attributes[key];
        });

        this.attributes = Object.assign(this.attributes, attributes);

        if (changed.length) {
            this.trigger();
        }
    }

    getAttributes() {
        return Object.assign({}, this.attributes);
    }

    on(fn) {
        this.listeners.push(fn);
    }

    off(fn) {
        this.listeners = this.listeners.filter((curFn) => curFn !== fn);
    }

    trigger() {
        this.listeners.forEach((listener) => listener());
    }
}
