import { json } from '@sveltejs/kit';

export async function GET({ fetch }) {
	const response = await fetch('/src/lib/server/my-data.json');

	const companyDetails = await response.json();

	if (!response.ok) {
		throw new Error('Failed to fetch company details');
	}

	return json(companyDetails, {
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type, Authorization'
		}
	});
}

export async function OPTIONS() {
	return new Response(null, {
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type, Authorization'
		}
	});
}

// import { json } from '@sveltejs/kit';

// export async function GET({ fetch }) {
//     const response = await fetch('/src/lib/server/my-data.json');

//     if (!response.ok) {
//         throw new Error('Failed to fetch company details');
//     }

//     const companyDetails = await response.json();

//     return json(companyDetails);
// }
