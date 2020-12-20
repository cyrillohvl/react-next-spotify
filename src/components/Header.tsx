import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/spotify.svg';
import Search from './Search';

const Header: React.FC = props => {
  const StyledLogo = styled(Logo)`
    width: 60px;
  `;

  return (
    <div className="nav">
      <div>
        <StyledLogo />
      </div>
      <div>
        <Search {...props} />
      </div>
    </div>
  );
};

export default Header;
