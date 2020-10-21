import React, { useState } from 'react';
import './styles.scss';
import ColorSection from '../../core/components/ColorSection';
import Profile from './components/Profile';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader';
import { Profile as ProfileType } from '../../core/types';
import { getFromURL } from '../../core/utils/requests';

const Search = () => {
  const [username, setUsername] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [profile, setProfile] = useState<ProfileType | null>();

  const handleOnChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowProfile(false);
    setProfile(null);
    if (username !== '' && username !== null) {
      setShowProfile(true);
      getFromURL<ProfileType>(`https://api.github.com/users/${username}`)
      .then(response => {
        setShowProfile(true);
        setProfile(response);    
      })
      .catch(_ => {
        setShowProfile(false);
      })
    }
  }

  return (
    <div className="container pt-4">
      <ColorSection>
        <form onSubmit={handleSubmitForm}>
          <h1 className="search-title">Encontre um perfil Github</h1>
          <input 
            type="text" 
            value={username}
            onChange={handleOnChangeUsername}
            className="search-input" 
            placeholder="Usuário Github"/>
          <button className="global-button" type="submit">Encontrar</button>
        </form>
      </ColorSection>
      <div className="searched-profiles mt-4">      
      {showProfile && (  
        !profile ? (
          <>
            <div className="profile">
              <div className="profile-image">
                <ImageLoader />
              </div>
              <div className="profile-content">
                <InfoLoader />
              </div>
            </div>
          </>
        ):(
          <Profile profile={profile} />
        )
      )}
      </div>
    </div>
  )
}

export default Search;
