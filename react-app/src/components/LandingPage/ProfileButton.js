import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
};

    useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
        setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    };

    return (
    <>
        <div className="profileButton" onClick={openMenu}>
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-user"></i>
        </div>
        {showMenu && (
        <div className="profile-dropdown">
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div  className="logoutButton" onClick={logout}>Log Out</div>
        </div>
        )}
    </>
    );
}

export default ProfileButton;
