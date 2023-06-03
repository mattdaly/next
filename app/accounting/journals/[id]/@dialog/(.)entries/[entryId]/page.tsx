import React from 'react';
import { get } from '@/lib/fetch';
import { Dialog } from '@/components/Dialog';
import { EntryForm } from '../../../_components/EntryForm';

export default async function Page({ params }: { params: { entryId: string } }) {
    const entry = await get(`/api/entries?id=${params.entryId}&delay=120`);

    return (
        <Dialog>
            <h1>Entry: #{entry.id}</h1>
            <EntryForm data={entry} />
        </Dialog>
    );
}
