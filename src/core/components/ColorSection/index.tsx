import React from 'react'
import './styles.scss'

type Props = {
  children: React.ReactNode;
}

const ColorSection = ({children}:Props) => {
  return (
    <div className="color-section">
      {children}
    </div>
  )
}

export default ColorSection;
