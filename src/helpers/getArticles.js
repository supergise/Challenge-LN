export const fetchData = async () => {
    const url = "ln.json";
    const resp = await fetch(url);
    const data = await resp.json();
    return data.articles;
};