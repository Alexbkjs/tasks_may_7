
let array = [
    [5, 3, 6],
    [7, 11, 2],
    [15, 9, 4]
]

function findMinElemAndMultiplyByMinElem(array) {
    // Flatten the array
    let flatArray = array.flat();

    // Find the minimum element
    let min = Math.min(...flatArray);

    // Multiply each element by the minimum element
    let result = array.map(row => row.map(el => el * min));

    return result;
}
console.table(findMinElemAndMultiplyByMinElem(array))

