import React from 'react'
import './styles.scss'

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-image">
        <img />
        <button className="global-button">Ver perfil</button>
      </div>
      <div className="profile-content">
        <div>
          <span className="info-count">
            Repositórios públicos: 62
          </span>
          <span className="info-count">
            Seguidores: 127
          </span>
          <span className="info-count">
            Seguindo: 416
          </span>
        </div>
        <div className="profile-informations">
          <h2>Informações</h2>
          <div className="information-item"><strong>Empresa:</strong> @ZupIT</div>
          <div className="information-item"><strong>Website/Blog:</strong> https://thewashington.dev</div>
          <div className="information-item"><strong>Localidade:</strong> Uberlândia</div>
          <div className="information-item"><strong>Membro desde:</strong> 19/10/2013</div>
        </div>
      </div>      
    </div>
  )
}

export default Profile
