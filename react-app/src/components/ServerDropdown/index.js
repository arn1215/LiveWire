import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import * as serverActions from '../../store/server';
import './ServerDropDown.css'

const ServerDropdown = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const {serverId} = useParams();
    const location = useLocation();
    const [showMenu, setShowMenu] = useState(false);
    const [showNameField, setShowNameField] = useState(false);
    const [newName, setNewName] = useState('')
    const sessionUser = useSelector(state => state.session.user)
    const currentServer = useSelector(state => state.server.oneServer.server);
    const home = useSelector(state => Object.values(state.server.userServers));
    const pathId = home[0].id

    const openNameField = () => {
        if (showNameField) return;
        setShowNameField(true)
    };

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    const HandleDelete = async () => {
                dispatch(serverActions.removeServer(currentServer.id))
                dispatch(serverActions.loadUsersServers(sessionUser.id))
                history.push({
                    pathname: `/@me/${pathId}`,
                });
    };

    const HandleNameEdit = async (e) => {
        setShowNameField(false)
        dispatch(serverActions.putServer({ newName, currentServer }))
        dispatch(serverActions.loadUsersServers(sessionUser.id))
        dispatch(serverActions.loadServerById(serverId))
    };
    

    return (
        <div className='server-dropdown'>
            <p className='current-server-name'>{currentServer?.name}</p>
            {location.pathname === `/servers/${serverId}` && (
                <div>
                    {sessionUser.id === currentServer?.owner_id && (
                    <i className="fa-solid fa-angle-down" onClick={openMenu}></i>
                    )}
                    {showMenu && (
                        <div className='server-dropdown-bar'>
                            <div className='server-name-edit' onClick={openNameField}>
                                Edit Name
                            </div>
                            {showNameField && (
                                <form onSubmit={HandleNameEdit} className='form-css'>
                                    <input
                                    className='input-css'
                                    type='text'
                                    value={newName}
                                    onChange={e => setNewName(e.target.value)}
                                    />
                                    <button type='submit' className='submit-edit-butt'>Edit</button>
                                </form>
                            )}
                                <div className='server-delete' onClick={HandleDelete}>
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
            )}
        </div>
    );
};

export default ServerDropdown;
