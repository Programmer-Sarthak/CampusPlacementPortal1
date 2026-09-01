
const statusMessages = {
  // Success Responses
  SUCCESS: {
    code: 200,
    message: "Request successful",
  },
  CREATED: {
    code: 201,
    message: "Resource created successfully",
  },
  ACCEPTED: {
    code: 202,
    message: "Request accepted",
  },

  // Client Error Responses
  BAD_REQUEST: {
    code: 400,
    message: "Bad request. Invalid data provided",
  },
  UNAUTHORIZED: {
    code: 401,
    message: "Unauthorized. Please login to continue",
  },
  FORBIDDEN: {
    code: 403,
    message: "Forbidden. You don't have permission to access this resource",
  },
  NOT_FOUND: {
    code: 404,
    message: "Resource not found",
  },
  CONFLICT: {
    code: 409,
    message: "Conflict. Resource already exists",
  },
  UNPROCESSABLE_ENTITY: {
    code: 422,
    message: "Unprocessable entity. Validation failed",
  },

  // Server Error Responses
  INTERNAL_SERVER_ERROR: {
    code: 500,
    message: "Internal server error",
  },
  SERVICE_UNAVAILABLE: {
    code: 503,
    message: "Service unavailable",
  },

  // Custom Messages
  INVALID_CREDENTIALS: {
    code: 401,
    message: "Invalid username or password",
  },
  USER_ALREADY_EXISTS: {
    code: 409,
    message: "User already exists",
  },
  USER_NOT_FOUND: {
    code: 404,
    message: "User not found",
  },
  INVALID_TOKEN: {
    code: 401,
    message: "Invalid or expired token",
  },
  SESSION_EXPIRED: {
    code: 401,
    message: "Session expired. Please login again",
  },
};

export default statusMessages;

