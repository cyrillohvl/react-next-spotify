import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/spotify.svg';
import Search from './Search';

const Header: React.FC = () => {
  const StyledLogo = styled(Logo)`
    width: 60px;
  `;

  return (
    <div className="nav">
      <div>
        <StyledLogo />
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default Header;
