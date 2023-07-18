import React from 'react'
import { NavLink } from 'react-router-dom'

// styles
import './TheNavigation.scss'

type Props = {}

const TheNavigation = (props: Props) => {
  return (
        <nav className="navigation">
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/tunes">Tunes</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
      </nav>
  )
}

export default TheNavigation