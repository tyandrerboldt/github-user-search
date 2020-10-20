import React from 'react'
import './styles.scss'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push("/search");
  }

  return (
    <div className="container columns">
      <h1 className="home-title">Desafio do Capítulo 3, Bootcamp DevSuperior</h1>
      <div className="home-description">
        <p>
          Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
        </p>
        <p>
          Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.
        </p>
        <p>
          Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki:  
          <a href="link"> antforfigma@gmail.com</a>
        </p>
      </div>
      <button className="global-button" onClick={handleButtonClick}>Começar</button>
    </div>
  )
}

export default Home;
