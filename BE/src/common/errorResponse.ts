
export class ErrorResponse {
    public data
    public success
    public message
    constructor( message = "error", data = null, success = false) {
        this.data = data
        this.success = success
        this.message = message
    }
}