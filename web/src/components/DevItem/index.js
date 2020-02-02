import React from 'react';

import { DevContainer, DevHeader, DevUserInfo, DevBio, Link, DevName, DevTechs } from './styles';

function DevItem({ dev }) {
  return (
    <DevContainer>
      <DevHeader>
        <img src={dev.avatar_url} alt={dev.name} />

        <DevUserInfo>
          <DevName>{dev.name}</DevName>
          <DevTechs>{dev.techs.join(', ')}</DevTechs>
        </DevUserInfo>
      </DevHeader>

      <DevBio>{dev.bio}</DevBio>

      <Link href={`https://github.com/${dev.github_username}`}>
        Acessar perfil no Github
      </Link>
    </DevContainer>
  );
}

export default DevItem;
