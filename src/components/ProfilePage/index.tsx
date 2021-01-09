import React from 'react';
import Feed from '../Feed';
import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        
        <h1>Lucas Gonçalves</h1>
        <h2>@lucas.goncalves</h2>

        <p>
          Developer at <a href="https://lucasgoncalves.dev">@LucasGoncalves</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Paraná, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 29 de Junho de 1994
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>93</strong>
          </span>
          <span>
            <strong>33</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
}

export default ProfilePage;