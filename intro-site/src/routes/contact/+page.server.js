/** @type {import('./$types').Actions} */

import { fail } from '@sveltejs/kit';

// https://kit.svelte.dev/docs/form-actions
export const actions = {
    // default: async (event) => {
    // event.request.formData
    default: async ({ request }) => {
        // TODO log the user in

        const formData = await request.formData();
        const email = formData.get('email');
        const message = formData.get('message');
        const errors = {};

        if (!email) {
            errors.email = 'Email is required'
        }

        if (!message) {
            errors.message = 'Message is required'
        }

        if (!errors.message && !errors.email) {
            console.log(email,message,'received message')
            return {
                success: true
            }
        }

        return fail(422, errors)


    }
};