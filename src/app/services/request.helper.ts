
export class RequestHelper {
    static constructRequestOptions(options?: any) {

        if (!options) {
            options = {};
        }
        const headers = {};
        if (!options.headers) {
            const token = this.getToken();
            if (token) {
                headers['Authorization'] = 'Bearer ' + token.refreshToken;
            }
            options = {...options, headers};
        }

        return options;
    }

    private static getToken(): any {
        return JSON.parse(localStorage.getItem('token'));
    }
}
