import React from 'react';
import './styles.scss';
import ColorSection from '../../core/components/ColorSection';
import Profile from './components/Profile';

const Search = () => {
  return (
    <div className="container pt-4">
      <ColorSection>
        <h1 className="search-title">Encontre um perfil Github</h1>
        <input type="text" className="search-input" placeholder="Usuário Github"/>
        <button className="global-button">Encontrar</button>
      </ColorSection>
      <div className="searched-profiles mt-4">
        <Profile />
      </div>
    </div>
  )
}

export default Search;
