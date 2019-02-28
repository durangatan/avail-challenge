import { loggingMiddleware } from './middlewares';
const API_URL = process.env.API_URL || `http://localhost:3001`;

const METHODS = {
  POST: 'POST'
};

export type EbcFetchConfig = {
  url: string;
  config?: RequestInit;
};

const ebcFetch = (config: EbcFetchConfig, middlewares = [loggingMiddleware]): Promise<Response> => {
  return middlewares
    .reduce((promiseChain, currentTask) => promiseChain.then(config => currentTask(config)), Promise.resolve(config))
    .then(config => {
      return fetch(config.url, config.config);
    });
};

const getJson = (url: string) => ebcFetch({ url }).then(res => res.json());

const postJson = (url: string, body: any) =>
  ebcFetch({
    url,
    config: { method: METHODS.POST, body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' } }
  });

export const getRoutine = (id: number): Promise<any> => getJson(`${API_URL}/routines/${id}`);

export const getRoutines = (): Promise<Array<any>> => getJson(`${API_URL}/routines`);

export const postRoutine = (routine: any): Promise<Response> => postJson(`${API_URL}/routines`, routine);

export const getExercises = (): Promise<Array<any>> => getJson(`${API_URL}/exercises`);

export const getWorkouts = (): Promise<Array<any>> => getJson(`${API_URL}/workouts`);

export const postWorkout = (workout: any): Promise<Response> => postJson(`${API_URL}/workouts`, workout);
