import { json } from '@sveltejs/kit';
//My Server.TS
/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const { inputs } = await request.json();
    
     function compute(allInputs:string) {
        return new Function('return ' + allInputs)();
    }
    return json(compute(inputs));
}



