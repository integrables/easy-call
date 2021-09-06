import { GenerateQueryString } from "./types";

export const generateQueryString : GenerateQueryString = (query) => {
    let result = '?';
    for (const property in query) {
        result = result.concat(`${property}=${query[property]}&`)
    }
    return result.substring(0, result.length - 1);
};