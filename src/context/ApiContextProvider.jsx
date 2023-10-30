import { useEffect, useState } from "react";
import { ApiContext } from "./ApiContex";
import { fetchData } from "../helpers/getArticles";

export const ApiContextProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);
    
    const getData = async () => {
        const data = await fetchData();
        setArticles(data);
    };
    useEffect(() => {
        getData();
    }, []);

    const getArticles = (quantity) => {
        let result;
        if (quantity > articles.length) {
            result = articles.splice(0);
        } else {
            result =  articles.splice(0, quantity);
        }
        if (articles.length == 0) {
            getData();
        }
        return result;
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