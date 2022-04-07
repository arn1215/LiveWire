import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ServerDropdown.css'
import { NavLink } from 'react-router-dom';

const ServerDropdown = () => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const { users } = useSelector(state => state.server);

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

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

    // const logout = (e) => {
    //     e.preventDefault();
    //     dispatch(sessionActions.logout());
    // };

    return (
        <>
            <div className='dropdown'>
                <button onClick={openMenu}>

                </button>
                {showMenu && (
                    <div className='server-dropdown'>
                        <NavLink to='/server-edit'>Edit Server</NavLink>
                        <div className='menu-logout' onClick={leaveServer}>
                            Log Out
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProfileButton;
