import React from "react";

type User = {
    name: string,
}

interface UserContextType {
    user: User | null;
    switchLoggin: () => void
}


//Creacion contexto
const UserContext = React.createContext<UserContextType>({
    user: null,
    switchLoggin: () => { }
});

interface UserProviderType {
children: React.ReactNode,
}

//Crecion provider
export const UserProvider: React.FC<UserProviderType> = ({ children }) => {
    const [user, setUser] = React.useState<UserContextType['user']>(null);

    const switchLoggin = () => {
        if (user) setUser(null);
        else setUser({name: "Matias"});
    };

    return (
        <UserContext.Provider value={{ user, switchLoggin }}>
            {children}
        </UserContext.Provider>
    );
};

//Creacion hook
export const useLoggedUser = () => {
    const context = React.useContext(UserContext);
    return context;
};
