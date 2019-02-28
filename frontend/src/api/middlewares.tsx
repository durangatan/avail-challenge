import { TenantFetchConfig } from './api';

export const loggingMiddleware = ({ config, url }: TenantFetchConfig) => {
	if (process.env.NODE_ENV === 'development') {
		console.log(
			`Tenant-API-${config ? config.method : 'GET'}:${url}`,
			config ? config.body : null
		);
	}
	return Promise.resolve({ config, url });
};
