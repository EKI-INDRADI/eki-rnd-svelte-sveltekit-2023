import { API_KEY } from '$env/static/private';
import { PUBLIC_API_KEY } from '$env/static/public';
import { error } from '@sveltejs/kit';


/** @type {import('./$types').PageServerLoad} */

//https://kit.svelte.dev/docs/routing
export async function load({ fetch, params }) {
    // console.log('hi')

    // export async function load(info) {
    // info.fetch...

    try {
        const url = `https://api.polygon.io/v2/aggs/ticker/${String(params.stock).toUpperCase()}/range/1/day/2023-01-01/2023-01-11?apiKey=${API_KEY}`
        const response = await fetch(url)
        const json = await response.json()

        if (json.status === 'ERROR') {
            throw error(500, 'There was an error')
        }

        return json;
    } catch (e) {
        throw error(500, 'There was an error')
    }


}