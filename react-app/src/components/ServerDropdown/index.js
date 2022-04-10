import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as serverActions from '../../store/server';
import './ServerDropDown.css'

const ServerDropdown = () => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [showNameField, setShowNameField] = useState(false);
    const [newName, setNewName] = useState('')
    const currentUser = useSelector(state => state.session.user)
    const currentServer = useSelector(state => state.server.oneServer?.server);
    const serverID = currentServer.id
    const userServers = useSelector(state => state.server.userServers);
    const currentServerName = useSelector(state => state.server.allServers.serverID)
    // console.log('userServers = ', userServers);
    // const belongsToUser = userServers?.find(server => server.owner_id === currentUser.id);



    const deleteServer = () => {
        dispatch(serverActions.removeServer(currentServer.id));
    };

    // const leaveServer = () => {
    //     dispatch(serverActions.removeUsersServers(currentServer.id, user.id));
    // }

    const openNameField = () => {
        if (showNameField) return;
        setShowNameField(true)
    };

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };




    // useEffect(() => {
    //     if (!showMenu) return;

    //     const closeMenu = () => {
    //         setShowMenu(false);
    //     };

    //     document.addEventListener('click', closeMenu);

    //     return () => document.removeEventListener('click', closeMenu);
    // }, [showMenu]);

        const handleNameEdit = (e) => {
            e.preventDefault();
            setShowNameField(false)
            dispatch(serverActions.putServer({ newName, currentServer }))
        }




    return (
        <div className='server-dropdown'>
            <p className='current-server-name'>{currentServer?.name}</p>
            {/* {belongsToUser && */}
            <i className="fa-solid fa-angle-down" onClick={openMenu}></i>
            {/* } */}
            {showMenu && (
                <div className='server-dropdown-menu'>
                    <div className='server-name-edit' onClick={openNameField}>
                        Edit Name
                    </div>
                    {showNameField && (
                        <form onSubmit={handleNameEdit}>
                            <input
                            type='text'
                            value={newName}
                            onChange={e => setNewName(e.target.value)}
                            />
                            <button type='submit'>Edit</button>
                        </form>
                    )}
                        <div className='server-delete' onClick={deleteServer}>
                            Delete Server
                        </div>
                    {/* {!belongsToUser && (
                        <div className='leave-server' onClick={leaveServer}>
                            Leave Server
                        </div>
                    )} */}
                </div>
            )}
        </div>
    );
};

export default ServerDropdown;
