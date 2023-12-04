// SERVER SIDE ROUTE
// https://kit.svelte.dev/docs/routing#server

/** @type {import('./$types').RequestHandler} */
export function GET(requestHandler) {
    //  requestHandler.request.body
    //  requestHandler.params ..


    return new Response(JSON.stringify({
        hello: 'world',
    }), {
        status: 200,
        statusText: 'Fetch'
    });
}