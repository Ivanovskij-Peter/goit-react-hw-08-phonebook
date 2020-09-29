import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../header/navigation.css';
import './avatar.css';
import { authOperations } from '../redux/auth';
import Button from '@material-ui/core/Button';
function AvatarAndName() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);
  const handleClick = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <div className="avatar-container">
      <span className="avatar-title">Welcome, {name} </span>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleClick}
      >
        Выйти
      </Button>
    </div>
  );
}
export default AvatarAndName;
