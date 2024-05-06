function bulkRun(functionsWithParams) {

    const promises = functionsWithParams.map(([func, params]) => {
        return new Promise((resolve) => {
            const result = func(...params);
            resolve(result);
        });
    });

    return Promise.all(promises);
}


const returnOne = () => 1;
const returnArg = a => a;
const returnArgsWithDelay = (...args) => {
    return new Promise(
        (resolve) => (
            setTimeout(() => {
                resolve([...args])
            }, 1000)
        ))
}

const functions = [
    [returnOne, []],
    [returnArg, [2]],
    [returnArgsWithDelay, [3, 4, 5, 6]]
];

bulkRun(functions)
    .then(results => {
        console.log(results);
    })

