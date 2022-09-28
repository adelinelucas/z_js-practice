import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm } = useGlobalContext();

  // uncontrolled input
  const searchValue= React.useRef('');

  // pour accéder à la valeur de mon input je vais utiliser current.value.focus et non e.target.value 
  React.useEffect(()=>{
    searchValue.current.focus();
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handelSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handelSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" id="name" ref={searchValue} onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
