import React, { useState} from 'react'
import logo from '../assets/logo.svg'


const Home = () => {
  const [title, setTitle] = useState('Reacttt')


  return (
    <div className='home'>
      <img className="logo" src= {logo} alt='react logo'/>
        <h1 onClick={()=> {
          setTitle(niecoTitle => niecoTitle+'!')}}>{title}</h1>
        <p>
            sweet arrow func
        </p>
    </div>
  )
}

export default Home