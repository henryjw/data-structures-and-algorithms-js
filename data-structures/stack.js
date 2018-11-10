class Stack {
    constructor(list) {
        this._items = list || []
    }

    push(item) {
        this._items.push(item)
    }

    pop(item) {
       return this._items.pop()
    }

    peek() {
        const lastIndex = this._items.length - 1
        return this._items[lastIndex]
    }

    clear() {
        this._items = []
    }

    isEmpty() {
        return this.length() === 0
    }

    length() {
        return this._items.length
    }
}

module.exports = Stack