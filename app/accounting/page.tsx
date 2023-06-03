export default async function Page() {
    return (
        <>
            <h1>Accounting</h1>
            <div className="grid grid-cols-3 gap-4">
                <span className="rounded bg-grey-200 h-64" />
                <span className="rounded bg-grey-200 h-64" />
                <span className="rounded bg-grey-200 h-64" />
                <span className="rounded bg-grey-200 h-64 col-span-2" />
                <span className="rounded bg-grey-200 h-64" />
            </div>
        </>
    );
}
