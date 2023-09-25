import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <span className="logo">DoubtAway</span>
      <div className="user">
        {currentUser ? (
          <>
            <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
          </>
        ) : (
          <span>Loading...</span>
          // You can replace this with a loading indicator or other content
        )}
      </div>
    </div>
  );
};

export default Navbar;



