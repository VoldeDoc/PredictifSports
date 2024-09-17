import React, {createContext,useContext,useEffect,useState} from "react";

const LoadingContext = createContext(false);

export function LoadingProvider({children}: {children: React.ReactNode}) {
const [isLoading,setisLoading] = useState(true);

useEffect(() => {
    setTimeout(() => {
        setisLoading(false);
    }, 2000);
},[]);

return (
    <LoadingContext.Provider value={isLoading}>
        {children}
    </LoadingContext.Provider>
);
}

export function useLoading() {
    const context = useContext(LoadingContext);
    if (context === undefined) {
        throw new Error("useLoading must be used");
    }
    return context 
}