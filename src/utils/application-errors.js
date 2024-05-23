export const DataErrors = {
    AXIOS_CONNECTION_REFUSED: "AXIOS_CONNECTION_REFUSED",
    AXIOS_REQUEST_ABORTED: "AXIOS_REQUEST_ABORTED",
    AXIOS_DNS_LOOKUP_FAILED: "AXIOS_DNS_LOOKUP_FAILED",
    AXIOS_CONNECTION_TIMED_OUT: "AXIOS_CONNECTION_TIMED_OUT",
    AXIOS_HOST_UNREACHABLE: "AXIOS_HOST_UNREACHABLE",
    AXIOS_BROKEN_PIPE: "AXIOS_BROKEN_PIPE",
    AXIOS_CONNECTION_RESET: "AXIOS_CONNECTION_RESET",
    AXIOS_NETWORK_UNREACHABLE: "AXIOS_NETWORK_UNREACHABLE",
    AXIOS_DNS_LOOKUP_TIMED_OUT: "AXIOS_DNS_LOOKUP_TIMED_OUT",
    AXIOS_BAD_REQUEST: "AXIOS_BAD_REQUEST",
    AXIOS_UNKOWN_ERROR: "AXIOS_UNKOWN_ERROR",
    UNKNOWN_DATA_ERROR: "UNKNOWN_DATA_ERROR",
};

export const BusinessErrors = {
    VALIDATION_FAILURE: "VALIDATION_FAILURE",
    MICROSERVICE_FAILURE: "MICROSERVICE_FAILURE",
    OTHER_DATA_ERROR: "OTHER_DATA_ERROR",
    UNKNOWN_BUSINESS_ERROR: "UNKNOWN_BUSINESS_ERROR",
};

export const HttpErrors = {
    BAD_REQUEST: "BAD_REQUEST",
    UNAUTHORIZED: "UNAUTHORIZED",
    FORBIDDEN: "FORBIDDEN",
    NOT_FOUND: "NOT_FOUND",
    METHOD_NOT_ALLOWED: "METHOD_NOT_ALLOWED",
    REQUEST_TIMEOUT: "REQUEST_TIMEOUT",
    CONFLICT: "CONFLICT",
    TOO_MANY_REQUESTS: "TOO_MANY_REQUESTS",
    INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
    NOT_IMPLEMENTED: "NOT_IMPLEMENTED",
    BAD_GATEWAY: "BAD_GATEWAY",
    SERVICE_UNAVAILABLE: "SERVICE_UNAVAILABLE",
    GATEWAY_TIMEOUT: "GATEWAY_TIMEOUT",
};

export const HttpErrorCode = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
};

export const BusinessErrorMap = {
    [DataErrors.AXIOS_CONNECTION_REFUSED]: BusinessErrors.MICROSERVICE_FAILURE,
    [DataErrors.AXIOS_REQUEST_ABORTED]: BusinessErrors.MICROSERVICE_FAILURE,
    [DataErrors.AXIOS_DNS_LOOKUP_FAILED]: BusinessErrors.MICROSERVICE_FAILURE,
    [DataErrors.AXIOS_CONNECTION_TIMED_OUT]: BusinessErrors.MICROSERVICE_FAILURE,
    [DataErrors.AXIOS_HOST_UNREACHABLE]: BusinessErrors.MICROSERVICE_FAILURE,
    [DataErrors.AXIOS_BROKEN_PIPE]: BusinessErrors.MICROSERVICE_FAILURE,
    [DataErrors.AXIOS_CONNECTION_RESET]: BusinessErrors.MICROSERVICE_FAILURE,
    [DataErrors.AXIOS_NETWORK_UNREACHABLE]: BusinessErrors.MICROSERVICE_FAILURE,
    [DataErrors.AXIOS_DNS_LOOKUP_TIMED_OUT]: BusinessErrors.MICROSERVICE_FAILURE,
    [DataErrors.AXIOS_UNKOWN_ERROR]: BusinessErrors.MICROSERVICE_FAILURE,
    [DataErrors.AXIOS_BAD_REQUEST]: BusinessErrors.VALIDATION_FAILURE,
    [DataErrors.UNKNOWN_DATA_ERROR]: BusinessErrors.OTHER_DATA_ERROR,
};

export const HttpErrorMap = {
    [BusinessErrors.VALIDATION_FAILURE]: HttpErrors.BAD_REQUEST,
    [BusinessErrors.MICROSERVICE_FAILURE]: HttpErrors.SERVICE_UNAVAILABLE,
    [BusinessErrors.OTHER_DATA_ERROR]: HttpErrors.INTERNAL_SERVER_ERROR,
    [BusinessErrors.UNKNOWN_BUSINESS_ERROR]: HttpErrors.INTERNAL_SERVER_ERROR,
};

export class DataError extends Error {
    type;
    cause;

    constructor(type, cause) {
        super(type);
        this.name = this.constructor.name;
        this.type = type;
        this.cause = cause;
    }
}

export class BusinessError extends Error {
    type;
    cause;

    constructor(type, cause) {
        super(type);
        this.name = this.constructor.name;
        this.type = type;
        this.cause = cause;
    }
}

export class HttpError extends Error {
    status;
    type;
    cause;

    constructor(statusCode, type, cause) {
        super(type);
        this.name = this.constructor.name;
        this.status = statusCode;
        this.type = type;
        this.cause = cause;
    }
}

export function processAxiosError(err) {
    if (err.isAxiosError) {
        switch (err.code) {
            case "ECONNREFUSED":
                throw new DataError(DataErrors.AXIOS_CONNECTION_REFUSED, {
                    name: "ConnectionRefusedError",
                    message: "Connection refused: The server is not reachable.",
                    code: err.code,
                });

            case "ECONNABORTED":
                throw new DataError(DataErrors.AXIOS_REQUEST_ABORTED, {
                    name: "RequestAbortedError",
                    message: "Request aborted: The server took too long to respond.",
                    code: err.code,
                });

            case "ENOTFOUND":
                throw new DataError(DataErrors.AXIOS_DNS_LOOKUP_FAILED, {
                    name: "DNSLookupError",
                    message: "DNS lookup failed: The server is not found.",
                    code: err.code,
                });

            case "ETIMEDOUT":
                throw new DataError(DataErrors.AXIOS_CONNECTION_TIMED_OUT, {
                    name: "TimeoutError",
                    message: "Connection timed out: The server took too long to respond.",
                    code: err.code,
                });

            case "EHOSTUNREACH":
                throw new DataError(DataErrors.AXIOS_HOST_UNREACHABLE, {
                    name: "HostError",
                    message: "Host unreachable: The server is unreachable due to network issues.",
                    code: err.code,
                });

            case "EPIPE":
                throw new DataError(DataErrors.AXIOS_BROKEN_PIPE, {
                    name: "BrokenPipeError",
                    message: "Broken pipe: The server closed the connection unexpectedly.",
                    code: err.code,
                });

            case "ECONNRESET":
                throw new DataError(DataErrors.AXIOS_CONNECTION_RESET, {
                    name: "ConnectionResetError",
                    message: "Connection reset: The server reset the connection unexpectedly.",
                    code: err.code,
                });

            case "ENETUNREACH":
                throw new DataError(DataErrors.AXIOS_NETWORK_UNREACHABLE, {
                    name: "NetworkError",
                    message: "Network unreachable: The server is unreachable due to network issues.",
                    code: err.code,
                });

            case "EAI_AGAIN":
                throw new DataError(DataErrors.AXIOS_DNS_LOOKUP_TIMED_OUT, {
                    name: "DNSLookupError",
                    message: "DNS lookup timed out: The server is not found.",
                    code: err.code,
                });

            case "ERR_BAD_REQUEST": 
                throw new DataError(DataErrors.AXIOS_BAD_REQUEST, {
                    name: "BadRequestError",
                    message: "Bad request: The server returned a bad request response.",
                    code: err.code,
                    cause: err.response.data,
                })
            default:
                throw new DataError(DataErrors.AXIOS_UNKOWN_ERROR, err);
        }
    } else {
        throw new DataError(DataErrors.UNKNOWN_DATA_ERROR, err);
    }
}

export function throwDataError(error) {
    if (error instanceof DataError) {
        throw error;
    } else {
        throw new DataError(DataErrors.UNKNOWN_DATA_ERROR, error);
    }
}

export function throwBusinessError(error) {
    if (error instanceof BusinessError) {
        throw error;
    } else if (error instanceof DataError) {
        throw new BusinessError(BusinessErrorMap[error.type] ?? BusinessErrors.OTHER_DATA_ERROR, error);
    } else {
        throw new BusinessError(BusinessErrors.UNKNOWN_BUSINESS_ERROR, error);
    }
}

export function throwHttpError(error) {
    if (error instanceof HttpError) {
        throw error;
    } else if (error instanceof BusinessError) {
        throw new HttpError(HttpErrorCode[HttpErrorMap[error.type]], HttpErrorMap[error.type], error);
    } else if (error instanceof DataError) {
        throw new HttpError(
            HttpErrorCode[HttpErrorMap[BusinessErrorMap[error.type]]],
            HttpErrorMap[BusinessErrorMap[error.type]],
            error
        );
    } else {
        throw new HttpError(500, HttpErrors.INTERNAL_SERVER_ERROR, error);
    }
}

export const catchAsyncDataError = function (fn) {
    return async (...args) => {
        try {
            return await fn(...args);
        } catch (error) {
            throwDataError(error);
        }
    };
};

export const catchAsyncBusinessError = function (fn) {
    return async (...args) => {
        try {
            return await fn(...args);
        } catch (error) {
            throwBusinessError(error);
        }
    };
};

export const catchAsyncHttpError = function (fn) {
    return async (...args) => {
        try {
            return await fn(...args);
        } catch (error) {
            throwHttpError(error);
        }
    };
};
