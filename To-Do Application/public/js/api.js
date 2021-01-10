export default class API {
    
    async usingAsyncAwait(url) {
        try {

            const response = await fetch(url);
            return await response.json();

        } catch(err) {
            console.log(err.message);
        }
    }

    usingFetch(url) {
        try {
            return fetch(url)
                    .then(response => response.json());
        } catch (err) {
            console.log(err.message);
        }
        
    }
}