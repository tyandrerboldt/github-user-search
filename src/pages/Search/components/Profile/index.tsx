import React from 'react'
import './styles.scss'
import { Profile as ProfileType } from '../../../../core/types';
import formatDate from '../../../../core/utils/formatDate';

type ProfileProps = {
  profile: ProfileType;
}

const Profile = ({profile}:ProfileProps) => {
  
  return (
    <div className="profile">
      <div className="profile-image">
        <img src={profile.avatar_url} alt={profile.name} />
        <button className="global-button">Ver perfil</button>
      </div>
      <div className="profile-content">
        <div>
          <span className="info-count">
            Repositórios públicos: {profile.public_repos}
          </span>
          <span className="info-count">
            Seguidores: {profile.followers}
          </span>
          <span className="info-count">
            Seguindo: {profile.following}
          </span>
        </div>
        <div className="profile-informations">
          <h2>Informações</h2>
          <div className="information-item"><strong>Empresa:</strong> {profile.company}</div>
          <div className="information-item"><strong>Website/Blog:</strong> {profile.blog}</div>
          <div className="information-item"><strong>Localidade:</strong> {profile.location}</div>
          <div className="information-item"><strong>Membro desde:</strong> {formatDate(profile.created_at, 'DD/MM/YYYY')}</div>
        </div>
      </div>      
    </div>
  )
}

export default Profile
