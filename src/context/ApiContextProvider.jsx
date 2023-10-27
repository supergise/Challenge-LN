import { useEffect, useState } from "react";
import { ApiContext } from "./ApiContex";
import { fetchData } from "../helpers/getArticles";

export const ApiContextProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const data = await fetchData();
            setArticles(data);
        };
        getArticles();
    }, []);

    const get3Articles = () => {
        return articles.slice(0, 3);
    };

    return (
        <ApiContext.Provider
            value={{
                articles,
                get3Articles,
            }}
        >
            {children}
        </ApiContext.Provider>
    );
};