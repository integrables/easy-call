import { AxiosResponse } from "axios";
import { ApiMethodType } from "../apiMethod/types";

export interface ApiType<TRequest, TResponse, TQuery = undefined> {
    url: string;
    method: ApiMethodType;
    data?: TRequest;
    query?: TQuery
    config?: object
}

export type CallType = <TRequest, TResponse, TQuery = undefined>(
    api: ApiType<TRequest, TResponse, TQuery>,
    onSuccess: (data: AxiosResponse<TResponse>) => void,
    onError: (error: object) => void,
    onFinish?: () => void,
) => void;

export type GetApiType<TRequest, TResponse, TQuery = undefined> = (data: TRequest, query?: TQuery) => ApiType<null, TResponse, TQuery>;

export type PostApiType<TRequest, TResponse, TQuery = undefined> = (data: TRequest, query?: TQuery) => ApiType<TRequest, TResponse, TQuery>;