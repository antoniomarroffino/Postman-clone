export const apiKey = "adelcelli";

export const methods = ["GET", "POST", "PUT", "DELETE", "PATCH"];

export const methodColors: { [key: string]: string } = {
    GET: "text-green-500",
    POST: "text-yellow-500",
    PUT: "text-blue-500",
    PATCH: "text-purple-500",
    DELETE: "text-red-500",
};

export const methodBgColors: { [key: string]: string } = {
    GET: "bg-green-500",
    POST: "bg-yellow-500",
    PUT: "bg-blue-500",
    PATCH: "bg-purple-500",
    DELETE: "bg-red-500",
};

export const METHODS_REQUIRING_BODY = ['POST', 'PUT', 'PATCH'];