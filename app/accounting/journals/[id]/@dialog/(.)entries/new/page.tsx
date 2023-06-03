import React from 'react';
import { EntryForm } from '../../../_components/EntryForm';
import { get } from '@/lib/fetch';
import { Dialog } from '@/components/Dialog';

export default async function Page({ params }: { params: { id: string } }) {
    // 120ms delay upperbound taken from network tab for /secure/internal-api/journals/1 endpoint
    const journal = await get(`/api/journals?id=${params.id}&delay=120`);

    return (
        <Dialog>
            <h1>{journal.name}: New entry</h1>
            <EntryForm />
        </Dialog>
    );
}
