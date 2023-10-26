import { UserContext } from "./UserContex";

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider
            value={{
                hola: "saludo",
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
