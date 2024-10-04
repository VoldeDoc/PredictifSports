import React,{createContext,useContext,useState} from "react"

const ModalContext = createContext(false)

export function ModalProvider({children}:{children:React.ReactNode}){
    const [openModal, setOpenModal] = useState(true);

    return(
        <ModalContext.Provider value={openModal}>

        </ModalContext.Provider>
    )

}