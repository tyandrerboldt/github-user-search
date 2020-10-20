import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

type Props = {
  title: string;
}

const Header = ({title}:Props) => {
  return (
    <header className="main-header">
      <Link to="/">
        <h1 className="main-header-title">{title}</h1>
      </Link>
    </header>
  )
}

export default Header;
