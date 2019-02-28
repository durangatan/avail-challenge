import { loggingMiddleware } from './middlewares';
const API_URL = process.env.API_URL || `http://localhost:3001`;

const METHODS = {
  POST: 'POST'
};

export type TenantFetchConfig = {
  url: string;
  config?: RequestInit;
};

const tenantFetch = (config: TenantFetchConfig, middlewares = [loggingMiddleware]): Promise<Response> => {
  return middlewares
    .reduce((promiseChain, currentTask) => promiseChain.then(config => currentTask(config)), Promise.resolve(config))
    .then(config => {
      return fetch(config.url, config.config);
    });
};

const getJson = (url: string) => tenantFetch({ url }).then(res => res.json());

const postJson = (url: string, body: any) =>
  tenantFetch({
    url,
    config: { method: METHODS.POST, body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' } }
  });
