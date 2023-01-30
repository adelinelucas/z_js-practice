import React, {createContext, useState, useEffect } from 'react';


export const WatchListContext = createContext();


export const WatchListContextProvider = ({children}) =>{
    // const data = localStorage.getItem('watchList') ? localStorage.getItem('watchList').split(',') : ['GOOGL', 'MSFT' ,'AMZN']

    const [watchList, setWatchList] = useState(localStorage.getItem('watchList')?.split(',') || ['GOOGL', 'MSFT' ,'AMZN']);

    useEffect( ()=>{
        localStorage.setItem('watchList', watchList)
    }, [watchList])

    const addStock= (stock) =>{
        console.log(stock)
        if(watchList.indexOf(stock) === -1){
            setWatchList([...watchList, stock])
        }
    }

    const deleteStock = (stock) =>{
        setWatchList(watchList.filter((el)=>{
            return el !== stock
        }))
    }
    return (
        <WatchListContext.Provider 
            value={
            {watchList, addStock, deleteStock}
            }
        >
            {children}
        </WatchListContext.Provider>
    )
}