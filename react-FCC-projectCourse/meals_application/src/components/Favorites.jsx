import React from 'react';
import { useGlobalContext } from '../context';

const Favorites = () => {
    const {showModal, selectMeal, favorites, removeFromFavorite} = useGlobalContext();

    return (
        <section className="favorites">
            <div className="favorites-content">
                <h5>Favorites</h5>
                <div className="favorites-container">
                    {favorites.map((item)=>{
                        const {idMeal, strMealThumb:image, strMeal} = item;
                        return <div key={idMeal} className="favorites-item">
                            <img src={image} className="favorites-img img" alt={strMeal} onClick={()=>selectMeal(idMeal, true) }/>
                            <button className='remove-btn' onClick={()=> removeFromFavorite(idMeal)}>remove</button>
                            </div>
                    })}
                </div>
            </div>
        </section>
    );
};

export default Favorites;