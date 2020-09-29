import React from 'react';
import { useSelector } from 'react-redux';
import AvatarAndName from '../avatarAndName/AvatarAndName';
import LogAndRegister from '../logAndRegister/LogAndRegister';
import Navigation from './Navigation';
import './navigation.css';
const Header = () => {
  const token = useSelector(state => state.auth.token);
  return (
    <header className="header">
      <Navigation />
      {token ? <AvatarAndName /> : <LogAndRegister />}
    </header>
  );
};
export default Header;
