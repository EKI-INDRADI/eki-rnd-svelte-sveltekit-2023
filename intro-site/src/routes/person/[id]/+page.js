import { error } from '@sveltejs/kit';

export const csr = true;
export const ssr = false;

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    // https://kit.svelte.dev/docs/routing

    // console.log('hi') // mirip ngOinit angular / constructor angular / form load pada vb net / middleware pada nodejs

    // console.log(params.id)


    // 1
    if (+params.id === 44) {
        throw error(404, { message: 'Person not found' })
    }


    //2

    // create intro-site\src\routes\+error.svelte  <<< auto redirect handle error with ui, makesure name '+error.svelte'


    // throw error(404, {message : 'Person not found'})

    return {
        id: params.id
    }


}