
/** @type {import('./$types').PageLoad} */
export function load({params}) {
    // https://kit.svelte.dev/docs/routing

    // console.log('hi') // mirip ngOinit angular / constructor angular / form load pada vb net / middleware pada nodejs

    // console.log(params.id)


    return {
        id :params.id
    }

    
}