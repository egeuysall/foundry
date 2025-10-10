'use client';

import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		Sentry.captureException(error);
	}, [error]);

	return (
		<html>
			<body>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						minHeight: '100vh',
						padding: '20px',
						fontFamily: 'system-ui, sans-serif',
					}}
				>
					<h2 style={{ marginBottom: '20px' }}>Something went wrong!</h2>
					<button
						onClick={() => reset()}
						style={{
							padding: '10px 20px',
							fontSize: '16px',
							borderRadius: '5px',
							border: '1px solid #ccc',
							backgroundColor: '#007bff',
							color: 'white',
							cursor: 'pointer',
						}}
					>
						Try again
					</button>
				</div>
			</body>
		</html>
	);
}
