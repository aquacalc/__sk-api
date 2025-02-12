import { json } from '@sveltejs/kit';

export async function GET({ fetch }) {
	const response = await fetch('/src/lib/server/my-data.json');

	const companyDetails = await response.json();

	return json(companyDetails);
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