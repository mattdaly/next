import { LayoutContent } from '@/components/Layout/Content';
import React from 'react';

export default function Home() {
    return (
        <LayoutContent className="bg-[linear-gradient(180deg,#29283e_6rem,#fff_0,#fff)] shadow-[inset_0_8px_8px_-8px_rgba(0,0,0,.51)] pb-8">
            <div className="mt-16 grid grid-cols-3 gap-4 w-md mx-auto">
                <div className="rounded-lg shadow-md border border-grey-100 bg-white h-80 p-6 text-center">
                    <h2>Income</h2>
                    <p>Keep track of your sales by creating and sending invoices to your customers</p>
                </div>
                <div className="rounded-lg shadow-md border border-grey-100 bg-white h-80 p-6 text-center">
                    <h2>Expenses</h2>
                    <p>Upload and record your receipts and purchases to keep track of your finances</p>
                </div>
                <div className="rounded-lg shadow-md border border-grey-100 bg-white h-80 p-6 text-center">
                    <h2>We're here to help you</h2>
                    <p>Chat with us all weekdays (outside opening hours we'll get back to you asap)</p>
                </div>
                <div className="rounded-lg shadow-md border border-grey-100 bg-white h-80 col-span-2 p-6">
                    <h2>Unpaid invoices</h2>
                    <React.Suspense fallback={<p>Loading...</p>}>
                        <UnpaidInvoicesChart />
                    </React.Suspense>
                </div>
                <div className="rounded-lg shadow-md border border-grey-100 bg-white h-80 text-center p-6">
                    <h2>Online courses</h2>
                    <p>Sign up for one of our online courses and get a proper introduction to e-conomic</p>
                </div>
            </div>
        </LayoutContent>
    );
}

async function UnpaidInvoicesChart() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return (
        <div className="grid grid-cols-2 gap-4 grow">
            <div>
                <span className="block h-52 w-52 rounded-full border-[12px] border-grey-200 mx-auto mt-2" />
            </div>
            <div className="h-64 -mt-8 border border-grey-300 rounded"></div>
        </div>
    );
}
