
export async function useFetch(url: string, options?: RequestInit) {
    try {
        const res = await fetch(url, options);
        const data = await res.json();
        return data
    } catch (e) {
        console.error(e);
    }
}


