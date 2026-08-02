// ============================================================================
// ApiError Class
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Ye custom Error class hai.
//
// Normal Error sirf message store karta hai.
//
// Example:
//
// throw new Error("Chat Not Found")
//
// Lekin hume status code bhi chahiye.
//
// Example:
//
// throw new ApiError(
//      404,
//      "Chat Not Found"
// );
//
// ============================================================================

class ApiError extends Error {

    constructor(

        statusCode,

        message

    ) {

        // Parent Error class ko message bhejna.

        super(message);

        // HTTP Status Code

        this.statusCode = statusCode;

        // Success always false

        this.success = false;

        // Error ka naam

        this.name = "ApiError";

        // Stack Trace maintain rahegi.

        Error.captureStackTrace(

            this,

            this.constructor

        );

    }

}

module.exports = ApiError;