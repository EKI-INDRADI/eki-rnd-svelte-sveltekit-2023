

import { RANDOM_NUMBER } from '$env/static/private';
import { error } from '@sveltejs/kit';

export function load({ params, locals }) {
    // console.log(locals)

    // if (locals?.user?.email === 'eki@red.com') {
    if (locals.user && !locals.user.admin) {
        // return {
        //     won: true
        // }

        throw error(403, {message : 'This is an admin only page.'})
    }

    const selectedNumber = +params.number

    if (selectedNumber === 2) {
        throw error(403, { message: 'Sanek eyes!!!!' })
    }


    return {
        won: selectedNumber === +RANDOM_NUMBER
    }
}
