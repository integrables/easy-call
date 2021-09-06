export type ApiMethodType = "get" | "post" | "put" | "delete";

export type ApiMethod = {
    [key in ApiMethodType]: ApiMethodType
};
 