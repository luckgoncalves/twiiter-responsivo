import React from 'react';

import Button from '../Button'

import { 
  Container, 
  Topside, 
  Logo, 
  MenuButton, 
  HomeIcon, 
  BellIcon, 
  EmailIcon, 
  FavoriteIcon, 
  ProfileIcon,
  ExitIcon,
  Botside,
  Avatar,
  ProfileData } from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        
        <Logo />
        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon className="active"/>
          <span>Perfil</span>
        </MenuButton>

        <Button outlined={false}>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Lucas Gonçalves</strong>
          <span>@lucas.goncalves</span>
        </ProfileData>
        <ExitIcon />
      </Botside>
    </Container>
  );
}

export default MenuBar;