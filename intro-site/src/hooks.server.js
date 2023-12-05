/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    //https://kit.svelte.dev/docs/hooks

    // if (event.url.pathname.startsWith('/custom')) {
    // if (event.url.pathname.startsWith('/random')) { //  jika /random ->  http://localhost:5173/random
    // 	return new Response('custom response');
    // }

    console.log('ran on server')

    event.locals.user = await getUser();

    const response = await resolve(event);
    return response;
}


async function getUser() {
    return {
        email: 'eki@red.com',
        admin : true
        // admin : false
    }
}