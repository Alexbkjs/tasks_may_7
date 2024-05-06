const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
// iterator.next() // { value: [1,2,3], done: false }
// iterator.next() // { value: [4,5,6], done: false }
// iterator.next() // { value: [7,8], done: false }
// iterator.next() // { value: undefined, done: true }


[0, 1, 2, 3].map(() => console.log(iterator.next()))


function* chunkArray(arr, chunkLength) {

    for (let i = 0; i < arr.length; i += chunkLength) {
        const chunk = arr.slice(i, i + chunkLength);
        yield chunk
    }
}


