import { loggingMiddleware } from './middlewares';
import {
  Applicant,
  ApplicationProperties,
  ApplicantJSON,
  ApplicationPropertiesJSON,
  Admin,
  AdminArguments
} from '../models';
import { MissingIdError } from '../error';
const API_URL = process.env.API_URL || `http://localhost:3000`;

const METHODS = {
  POST: 'POST',
  PUT: 'PUT'
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
    config: {
      method: METHODS.POST,
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    }
  }).then(res => {
    if (res.status >= 400) {
      return Promise.reject(new Error('Unauthorized'));
    }
    return res.json();
  });

const putJson = (url: string, body: any) =>
  tenantFetch({
    url,
    config: {
      method: METHODS.PUT,
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    }
  }).then(res => {
    if (res.status >= 400) {
      return Promise.reject(new Error('Unauthorized'));
    }
    return Promise.resolve();
  });

export const getApplicants = () =>
  getJson(`${API_URL}/applicants`).then(array =>
    array.map((applicant: ApplicantJSON) => Applicant.fromJSON(applicant))
  );

export const getApplicant = (id: number) =>
  getJson(`${API_URL}/applicants/${id}`).then((applicantJson: ApplicantJSON) => {
    return Applicant.fromJSON(applicantJson);
  });

export const createApplicant = (applicant: Applicant) => {
  return postJson(`${API_URL}/applicants`, applicant).then((applicantJson: ApplicantJSON) => {
    return Applicant.fromJSON(applicantJson);
  });
};

export const saveApplicant = (applicant: Applicant) => {
  if (!applicant.id) {
    throw new MissingIdError('No ID found for this applicant. Maybe you meant to call createApplicant?');
  }
  return putJson(`${API_URL}/applicants/${applicant.id}`, applicant);
};

export const checkApplicantToken = (applicantId: number, token: string) =>
  postJson(`${API_URL}/applicants/token`, { id: applicantId, token });

export const getApplicationProperties = () =>
  getJson(`${API_URL}/properties`).then((applicationProperties: ApplicationPropertiesJSON) => {
    return ApplicationProperties.fromJSON(applicationProperties);
  });

export const login = (admin: Admin) =>
  postJson(`${API_URL}/login`, admin).then(adminJson => {
    return new Admin(adminJson);
  });

export const logout = () => postJson(`${API_URL}/logout`, {});
