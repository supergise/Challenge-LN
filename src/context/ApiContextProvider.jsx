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

    const getArticles = (quantity) => {
        if (quantity > articles.length) {
            return articles.splice(0);
        } else {
            return articles.splice(0, quantity).reverse();
        }
    };

    return (
        <ApiContext.Provider
            value={{
                getArticles,
            }}
        >
            {children}
        </ApiContext.Provider>
    );
};