import React, { useState, useContext } from 'react'
//we wrapp the application in the context 

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () =>{
        setIsSidebarOpen(true)
    }

    const closeSidebar = () =>{
        setIsSidebarOpen(false)
    }

    const openModal = () =>{
        setIsModalOpen(true)
    }

    const closeModal = () =>{
        setIsModalOpen(false)
    }

    return <AppContext.Provider test='test' value={{
        isModalOpen, 
        isSidebarOpen, 
        openModal, 
        closeModal, 
        openSidebar, 
         closeSidebar
    }}>{children}</AppContext.Provider>
}

// custom hook 
export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext, AppProvider}