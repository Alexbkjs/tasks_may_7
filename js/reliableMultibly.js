
function NotificationException() { }
function ErrorException() { }
function primitiveMultiply(a, b) {
    const rand = Math.random();
    if (rand < 0.5) {
        return a * b;
    } else if (rand > 0.85) {
        throw new ErrorException()
    } else {
        throw new NotificationException()
    }
}

function reliableMultiply(a, b) {
    let result;

    while (!result) {
        try {
            result = primitiveMultiply(a, b);
            return result;
        } catch (err) {
            if (err instanceof ErrorException) {
                return 'The program terminated due to ErrorException.';
            }
        }
    }
}

console.log(reliableMultiply(8, 8));

