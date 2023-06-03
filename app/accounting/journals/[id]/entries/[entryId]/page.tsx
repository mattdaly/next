import React from 'react';
import { get } from '@/lib/fetch';
import { EntryForm } from '../../_components/EntryForm';
import { Dialog } from '@/components/Dialog';

export default async function Page({ params }: { params: { entryId: string; id: string } }) {
    const entry = await get(`/api/entries?id=${params.entryId}&delay=120`);

    return (
        <Dialog>
            <h1>Entry: #{entry.id}</h1>
            <EntryForm data={entry} />
        </Dialog>
    );
}
