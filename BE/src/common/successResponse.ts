export class SuccessResponse {
    public data
    public success
    public message
    public statusCode
    constructor(data = null, message = "success", success = true, statusCode = 201) {
        this.data = data
        this.success = success
        this.message = message
        this.statusCode = statusCode
    }
}