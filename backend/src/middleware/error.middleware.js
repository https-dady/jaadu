// ============================================================================
// Global Error Middleware
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Ye middleware application ke saare errors ko ek hi jagah handle karega.
//
// Flow:
//
// Route
//    │
//    ▼
// Controller
//    │
//    ▼
// Service
//    │
//    ▼
// throw new ApiError(...)
//    │
//    ▼
// asyncHandler
//    │
//    ▼
// next(error)
//    │
//    ▼
// Global Error Middleware  ← (Ye File)
//    │
//    ▼
// Client
//
// ============================================================================

const errorHandler = (err, req, res, next) => {

    // Agar error me statusCode nahi hai,
    // to default 500 Internal Server Error use karo.

    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({

        success: false,

        message: err.message || "Internal Server Error",

        // Development me debugging ke liye useful.
        // Production me isko hide kar denge.

        stack:
            process.env.NODE_ENV === "development"
                ? err.stack
                : undefined

    });

};

module.exports = errorHandler;