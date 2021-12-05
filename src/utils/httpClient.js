export const httpClient = {
    get: async (url, options) => {
        return fetch(url, options).then(response => response.json())
    }
}