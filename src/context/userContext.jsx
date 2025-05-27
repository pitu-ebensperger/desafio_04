import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
        const [token, setToken] = useState({ // Estado token inicial
            email: "desafiolatam@desafiolatam.com",
            displayName: "Desafío Latam",
        });
        
        return (
            <UserContext.Provider value={{token, setToken}}> 
                {children}
            </UserContext.Provider>
            );
};

export default UserProvider;
