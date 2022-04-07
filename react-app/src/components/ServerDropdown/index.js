import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ServerDropdown.css'
import { NavLink } from 'react-router-dom';

const ServerDropdown = () => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const serverName = useSelector(state => state.oneServer.server.name);
    const userServers = useSelector(state => state.userServers)
    const belongsToUser = userServers.find(server => server.name === serverName)

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

    return (
        <>
            <div className='dropdown'>
                <button onClick={openMenu}>
                    {serverName}
                </button>
                {showMenu && (
                    <div className='server-dropdown'>
                        <NavLink to='/server-edit'>Edit Server</NavLink>
                        {belongsToUser && (
                            <div className='delete-server' onClick={deleteServer}>
                                Delete Server
                            </div>
                        )}
                        {!belongsToUser && (
                            <div className='leave-server' onClick={leaveServer}>
                                Leave Server
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default ServerDropdown;
