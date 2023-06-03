import { get } from '@/lib/fetch';
import Link from 'next/link';
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
    // 120ms delay upperbound taken from network tab for /secure/internal-api/journals/1 endpoint
    const journal = await get(`/api/journals?id=${params.id}&delay=120`);

    return (
        <>
            <h1>{journal.name}</h1>
            <div className="flex gap-4 mb-4">
                <Link
                    className="h-8 px-4 flex items-center bg-blue-500 text-white rounded hover:bg-blue-700 hover:text-white"
                    href={`/accounting/journals/${params.id}/entries/new`}>
                    New entry
                </Link>
            </div>
            <React.Suspense fallback={<p>Loading entries...</p>}>
                <Entries journalId={params.id} />
            </React.Suspense>
        </>
    );
}

async function Entries({ journalId }) {
    // 400ms delay upperbound taken from network tab for /secure/internal-api/accounting/journals/1/entries?pagesize=50&skippages=0 endpoint
    const entries = await get(`/api/entries?journalId=${journalId}&delay=400`);
    const columns = Object.keys(entries[0]);

    return (
        <table>
            <thead>
                <tr>
                    {columns.map(column => (
                        <th key={column} className="text-center">
                            {column}
                        </th>
                    ))}
                    <th />
                </tr>
            </thead>
            <tbody>
                {entries.map(entry => (
                    <tr key={entry.id}>
                        {columns.map(column => (
                            <td key={column} className="text-center">
                                {entry[column]}
                            </td>
                        ))}
                        <td>
                            <Link href={`/accounting/journals/${journalId}/entries/${entry.id}`} className="text-blue-500">
                                Edit
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
