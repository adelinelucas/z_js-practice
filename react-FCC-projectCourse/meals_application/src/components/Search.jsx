import React, {useState} from 'react';
import { useGlobalContext } from '../context';
 
const Search = () => {

    const [text, setText] = useState('');
    const {setSearchTerm, fetchRandomMeal} = useGlobalContext();
    const handelChange = (e) =>{
        setText(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(text)
        if(text){
            setSearchTerm(text)
            // setText('')
        }
    }

    const handleRandomMeal =()=> {
        setSearchTerm('');
        setText('');
        fetchRandomMeal()
    }
    
    return (
        <header className='search-container'>
            <form >
                <input type="text" className="form-input" placeholder='type favorite meal' value={text} onChange={handelChange}/>
                <button className="btn" type="submit" onClick={handleSubmit}>Search</button>
                <button className="btn btn-hispter" type='button' onClick={handleRandomMeal}>Surprise me !</button>
            </form>
        </header>
    );
};

export default Search;