export function EntryForm({ data = {}, ...props }) {
    return (
        <form {...props}>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <label className="flex flex-col">
                    Id:
                    <input defaultValue={data.id} type="number" className="h-8 border border-grey-300 px-2 rounded" />
                </label>
                <label className="flex flex-col">
                    Date:
                    <input
                        defaultValue={(data.date ? new Date(data.date) : new Date()).toISOString().substr(0, 10)}
                        type="date"
                        className="h-8 border border-grey-300 px-2 rounded"
                    />
                </label>
                <label className="flex flex-col">
                    Amount:
                    <input defaultValue={data.amount} type="number" className="h-8 border border-grey-300 px-2 rounded" />
                </label>
                <label className="flex flex-col">
                    Account:
                    <select defaultValue={data.account} className="h-8 border border-grey-300 px-2 rounded">
                        <option value={1010}>1010 - Salg af varer/ydelser m/moms</option>
                        <option value={1020}>1020 - Salg af varer til udland</option>
                        <option value={1021}>1021 - Salg af ydelser til udland</option>
                        <option value={1025}>1025 - Salg af varer til EU</option>
                        <option value={1026}>1026 - Salg af ydelser til EU</option>
                        <option value={2210}>2210 - Lønninger</option>
                    </select>
                </label>
            </div>
            <div className="flex justify-end">
                <button className="h-8 px-4 flex items-center bg-blue-500 text-white rounded" type="submit">
                    Save
                </button>
            </div>
        </form>
    );
}
