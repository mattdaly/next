export const runtime = 'edge';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    // We sometimes artificially delay a reponse for demo purposes.
    // Don't do this in real life :)
    const delay = searchParams.get('delay');

    if (delay) {
        await new Promise(resolve => setTimeout(resolve, Number(delay)));
    }

    const id = searchParams.get('id');

    if (id) {
        let journal = data.find(journal => String(journal.id) === String(id));

        return new Response(JSON.stringify(journal ?? null), {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        });
    }

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            'content-type': 'application/json',
        },
    });
}

const data = [
    {
        id: 1,
        name: 'Daglig',
    },
    {
        id: 2,
        name: 'Indbetalinger',
    },
];
