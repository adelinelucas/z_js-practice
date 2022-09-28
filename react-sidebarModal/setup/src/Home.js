import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobalContext } from './context'

const Home = () => {
  // on appelle le context dans notre component
  const {openSidebar, openModal} = useContext(AppContext)
  // console.log(data)
  // import du custome hook qui revient au moment que d'importer notre contexte
  // dans ce cas on  à pas besoin d'importer useContext ni AppContext
  //const dataC = useGlobalContext();
  
  return(
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        show modal
      </button>

    </main>
  )
}

export default Home
