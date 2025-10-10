// @ts-ignore - @sentry/nextjs module not installed
import * as Sentry from '@sentry/nextjs';

export const register = () => {
	Sentry.init({
		dsn: process.env.SENTRY_DSN,
		tracesSampleRate: 1.0,
		environment: process.env.NODE_ENV,
	});
};

export const onRequestError = Sentry.captureRequestError;
