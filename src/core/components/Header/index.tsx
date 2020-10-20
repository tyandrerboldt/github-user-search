import React from 'react'
import './styles.scss'

type Props = {
  title: string;
}

const Header = ({title}:Props) => {
  return (
    <div className="main-header">
      <h1 className="main-header-title">{title}</h1>
    </div>
  )
}

export default Header;
