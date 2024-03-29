import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#ab5991').all(10));

  const handelSubmit =(e) =>{
    e.preventDefault();
    console.log('is working');
    try{
      let colors = new Values(color).all(10)
      setList(colors)
      console.log(colors);
    }catch(err){
      setError(true)
      console.log(err);
    }
  }



  return(
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handelSubmit}>
          <input 
            type="text" 
            value={color} 
            onChange={(e)=> setColor(e.target.value)} 
            placeholder="#ab5991"
            className={`${error ? 'error' : null}`}
            />
          <button className='btn' type='submit'>submit</button>
        </form>
      </section>

      <section className='colors'>
        {list.map( (color, index) =>{
          const hexColor = color.hex
          return <SingleColor key={index} {...color} index={index} hexColor={hexColor}/>
        })}
      </section>
    </>
  )
}

export default App
