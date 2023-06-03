import { LayoutContent } from '@/components/Layout/Content';
import { LayoutSidebar } from '@/components/Layout/Sidebar';
import { Progress } from '@/components/Progress/Progress';
import { get } from '@/lib/fetch';
import React from 'react';

export const metadata = {
    title: 'Accounting',
};

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <LayoutSidebar>
                <span className="font-bold">Journals</span>
                <React.Suspense fallback={<Progress className="my-2" />}>
                    <JournalLinks />
                </React.Suspense>
                <span className="font-bold">Lists</span>
                <LayoutSidebar.Link href="/accounting/lists/accounts">Accounts</LayoutSidebar.Link>
            </LayoutSidebar>
            <LayoutContent className="p-4">{children}</LayoutContent>
        </>
    );
}

async function JournalLinks() {
    // 150ms delay is upperbound taken from network tab for /secure/internal-api/daybooks?type=classic endpoint
    const journals = await get('/api/journals?delay=150');

    return (
        <>
            {journals.map(journal => (
                <LayoutSidebar.Link href={`/accounting/journals/${journal.id}`}>{journal.name}</LayoutSidebar.Link>
            ))}
        </>
    );
}
