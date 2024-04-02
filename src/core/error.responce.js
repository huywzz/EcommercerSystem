const { reasonPhrases, statusCodes } = require('../utils/httpStatusCode')


class ErrorResponse extends Error {
    constructor(message, status) {
        super(message, status)
        this.status = status;
    }
}

class BadRequestError extends ErrorResponse {
    constructor(message = reasonPhrases.BAD_REQUEST, status = statusCodes.BAD_REQUEST) {
        super(message, status)
    }
}


class NotFoundError extends ErrorResponse {
    constructor(message = reasonPhrases.NOT_FOUND, status = statusCodes.NOT_FOUND) {
        super(message, status)
    }
}
class ForbirdenError extends ErrorResponse {
    constructor(message = reasonPhrases.FORBIDDEN, status = statusCodes.FORBIDDEN) {
        super(message, status)
    }
}

module.exports = {
    BadRequestError,
    ForbirdenError,
    NotFoundError
}