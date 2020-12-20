import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import Logo from '../assets/spotify.svg';
import Search from './Search';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  token?: string;
  setSearchResults?: any;
  setSearchTerm?: any;
  searchTerm?: any;
  searchResults?: any;
}

const Header: React.FC<InputProps> = props => {
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
