const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.status(constants.VALIDATION_ERROR).json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.status(constants.NOT_FOUND).json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack,
            });
            break; // Ensure this break to prevent fall-through
        case constants.UNAUTHORIZED:
            res.status(constants.UNAUTHORIZED).json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack,
            });
            break; // Added break here
        case constants.FORBIDDEN:
            res.status(constants.FORBIDDEN).json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack,
            });
            break; // Added break here
        case constants.SERVER_ERROR:
            res.status(constants.SERVER_ERROR).json({
                title: "Internal Server Error",
                message: err.message,
                stackTrace: err.stack,
            });
            break; // Added break here
        default:
            console.log("all good chief");
            res.status(500).json({ // Set a default error response
                title: "Internal Server Error",
                message: "An unexpected error occurred.",
                stackTrace: err.stack,
            });
            break;
    }
};

module.exports = errorHandler;
