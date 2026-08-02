// ============================================================================
// ApiResponse
// ============================================================================
//
// Purpose:
//
// Backend ke saare successful responses
// ek hi format me bhejne ke liye.
//
// ============================================================================

class ApiResponse {

    constructor(

        statusCode,

        message,

        data = null

    ) {

        this.success = true;

        this.statusCode = statusCode;

        this.message = message;

        this.data = data;

    }

}

module.exports = ApiResponse;