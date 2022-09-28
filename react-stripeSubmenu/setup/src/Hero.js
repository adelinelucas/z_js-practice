import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  // vérifié que l'on récupère bien les infos de notre context
  // const data = useGlobalContext()
  // console.log(data)

  const {closeSubmenu} = useGlobalContext()

  return(
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes-from stratups to Fortune 500s-use
            Stripe's software and API's to accept payments, send payouts, and manage their businesses online.
          </p>
          <button className='btn'> Start Now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone' className='phone-img' />
        </article> 
      </div>
    </section>
  )
}

export default Hero
