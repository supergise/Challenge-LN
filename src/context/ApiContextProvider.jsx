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
        return articles.slice(1, 4);
    };

    const getFirst = () => {
       return  articles[0];
    }

    const getAllArticles = () => {
        return articles;
    }

    return (
        <ApiContext.Provider
            value={{
                articles,
                get3Articles,
                getFirst,
                getAllArticles
            }}
        >
            {children}
        </ApiContext.Provider>
    );
};