export async function get(url: string) {
    const response = await fetch(`http://localhost:3000${url}`, { next: { revalidate: 0 } });

    if (!response.ok) {
        throw new Error(`Failed to fetch from ${url}`);
    }

    return response.json();
}
