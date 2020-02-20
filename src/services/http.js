/* global fetch */
export default class Http {
    static async get(url) {
        const response = await fetch(url, {
            credentials: 'same-origin',
            headers: {
                'X-API-Key': 'keN9LMnG4y69Yj1wBbDsZQnGzRnvWjPGekSbcAIx'
            }
        });
        return response.json();
    }
}
