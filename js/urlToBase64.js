const URL = 'https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8';

getBase64FromUrl(URL);

function getBase64FromUrl(URL) {
    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Something wrong with response');
            }
            return response.blob();
        })
        .then(blob => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.addEventListener("load", () => { resolve(reader.result); });
                reader.addEventListener("error", () => { reject(new Error('An error occurred while reading the file.')); });
                reader.readAsDataURL(blob);
            });
        })
        .then(result => { console.log('content', result); })
        .catch(error => { console.error('There was a problem with the fetch:', error); });
}



