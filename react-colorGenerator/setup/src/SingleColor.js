import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const[alert, setAlert] = useState(false);

  const background = rgb.join(',');
  // affichage du nom de la couleur - methode 1 
  const hex = rgbToHex(...rgb)

  // methode 2
  const hexValue = `#${hexColor}`;

  useEffect( ()=>{
    const timeOut = setTimeout( ()=>{
      setAlert(false)
    }, 3000);

    // fonction de nettoyage
    return ()=>{
      clearTimeout(timeOut)
    }
  }, [alert])

  return(
  <article className={`color ${index > 10 && 'color-light'} `} style={{backgroundColor:`rgb(${background})`}}
  onClick={()=>{
    setAlert(true);
    navigator.clipboard.writeText(hexValue)
  }}
  >
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>{hex}</p>
    <p className='color-value'>{hexValue}</p>
    {alert && <p className='alert'>
      copied to clipboard</p>}
  </article>
  )
}

export default SingleColor
