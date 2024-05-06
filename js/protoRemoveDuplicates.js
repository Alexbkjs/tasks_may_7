String.prototype.removeDuplicate = function () {
    const uniqueValues = new Set(this.split(' '));
    return [...uniqueValues].join(' ')
}

let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double"
// Int32 Double