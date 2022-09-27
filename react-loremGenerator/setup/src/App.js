import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handelSubmit = (e) =>{
    e.preventDefault();
    let amount = parseInt(count)

    if(count <= 0 ){
      amount = 1
    }
    if(count > 8 ){
      amount = 8
    }
    setText(data.slice(0, amount))
  }
  
  return (
  <section className='section-center'>
    <h3>Titred of boring lorem ipsum ? </h3>
    <form className='lorem-form' onSubmit={handelSubmit}>
      <label htmlFor='amount'>
        paragraphs : 
      </label>
      <input type="number" name="amount" id="amount" value={count} onChange={(e)=>{setCount(e.target.value)}}/>

      <button type="submit" className='btn'>Generate</button>
    </form>

    <article className='lorem-text'>
      {text.map((paragraph, index)=> {
        return <p key={index}>{paragraph}</p>
      })}
    </article>
  </section>
  )
}

export default App;
