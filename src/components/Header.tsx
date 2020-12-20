import React, { InputHTMLAttributes } from 'react';
import { NextRouter, useRouter } from 'next/router';
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
  const router: NextRouter = useRouter();

  console.log(router);

  const StyledLogo = styled(Logo)`
    width: 60px;
  `;

  return (
    <div className="header">
      <div>
        <StyledLogo />
      </div>
      <div>
        {props.token && router.pathname == '/' && <Search {...props} />}
      </div>
    </div>
  );
};

export default Header;
