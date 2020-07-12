async function fetcher(url: RequestInfo) {
    try {
        const res = await fetch(url);
        const json = await res.json();
        return json.meals;
    } catch (e) {
        throw e;
    }
}

export default fetcher