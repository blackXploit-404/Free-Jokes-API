// Custom error handler middleware
export const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log error stack for debugging
    res.status(500).json({
        message: "Something went wrong, please try again later.",
        error: err.message,
    });
};
