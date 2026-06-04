class ApiError extends Error {
    constructor(
        statusCode, 
        message= "Something went wrong",
        errors = [],
        statck = ""
        
    ) {
        super(message)
        this.statusCode = statusCode;
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

<<<<<<< HEAD
        if(statck) {
            this.stack = statck
=======
        if(stack) {
            this.stack = stack
>>>>>>> 2127400 (first commit)
        } else {
            Error.captureStackTrace(this, this.constructor)

        }
    }
}  

export { ApiError }

