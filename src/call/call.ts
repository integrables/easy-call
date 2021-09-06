import axios from 'axios';
import apiMethod from '../apiMethod/apiMethod';
import { generateQueryString } from '../url/url';
import { CallType } from "./types";

const call: CallType = (api, onSuccess, onError, onFinish) => {
    let {url, data, config, query, method} = api;
    let request = null;
    const queryString = generateQueryString(query);
    url += queryString;

    switch (method) {
      case apiMethod.post:
        request = axios.post(url, data, config);
        break;
      case apiMethod.put:
        request = axios.put(url, data, config);
        break;
      case apiMethod.delete:
        request = axios.delete(url, config);
        break;
      default:
        request = axios.get(url, config);
    }

    request.then(response => {
        onSuccess(response)
        onFinish && onFinish()
    }).catch(error => {
        onError(error);
        onFinish && onFinish()
    });
};


export default call;