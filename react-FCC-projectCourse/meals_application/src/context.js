import React, {useContext, useEffect, useState} from "react";
import axios from 'axios';
const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({children}) =>{
    const [meals, setMeals] = useState([]);

    const fetchMeals= async(url) =>{
        try{
            const {data} = await axios(url)
            setMeals(data.meals)
        }catch(error){
            console.log(error.response)
        }
    }    

    useEffect(()=>{
        // .then 
            //fetch().then().then()
        // async/ await  you have to create the function outside and invoc it inside the use Effect. 
        // but use Effect cannont be asynchronos, react doesn't allow it.
        fetchMeals(allMealsUrl)
    }, [])

    return <AppContext.Provider 
            value={{meals}}
        >
            {children}
        </AppContext.Provider>
}

// Custum hook to invoque the AppContext
export const useGlobalContext = () =>{
    return (
        useContext(AppContext)
    )
}

export {AppContext, AppProvider}