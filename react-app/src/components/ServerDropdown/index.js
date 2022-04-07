import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ServerDropdown.css'
import { NavLink } from 'react-router-dom';
import * as serverActions from '../../store/server';

const ServerDropdown = () => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [showNameField, setShowNameField] = useState(false);
    const [newName, setNewName] = useState('')
    const currentServer = useSelector(state => state.oneServer.server);
    const userServers = useSelector(state => state.userServers)
    const belongsToUser = userServers.find(server => server.name === serverName)

    const deleteServer

    const deleteServer = (e) => {
        e.preventDefault();
        dispatch(serverActions.removeServer(currentServer.id));
    };

    const openNameField = () => {
        if (showNameField) return;
        setShowNameField(true)
    };

    const handleNameEdit = () => {
        setShowNameField(false)
        currentServer.name = newName
        return dispatch(serverActions.putServer(currentServer))
    }

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
                    {currentServer.name}
                </button>
                {showMenu && (
                    <div className='server-dropdown'>
                        <div className='server-name-edit-div' onClick={openNameField}>
                            Edit Name
                        </div>
                        {showNameField && (
                            <form onSubmit={handleNameEdit}>
                                <input type='text' value={newName} onChange={e => setNewName(e.target.value)}/>
                                <button type='submit'>Edit</button>
                            </form>

                        )}
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
