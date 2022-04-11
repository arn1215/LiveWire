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
    // const [isLoaded, setIsLoaded] = useState(false)
    const [showNameField, setShowNameField] = useState(false);
    const [newName, setNewName] = useState('')
    const sessionUser = useSelector(state => state.session.user)
    // const currentUser = useSelector(state => state.session.user)
    const currentServer = useSelector(state => state.server.oneServer.server);
    // const userServers = useSelector(state => state.server.userServers);
    const home = useSelector(state => Object.values(state.server.userServers));
    const pathId = home[0].id
    // const user = useSelector(state => state.session.user);
    // console.log('userServers = ', userServers);
    // const belongsToUser = userServers?.find(server => server.owner_id === currentUser.id);


    // useEffect(() => {
    //     const loaded = async () => {
    //         await dispatch(serverActions.loadUsersServers(user.id))
    //         await dispatch(serverActions.loadServerById(serverId))
    //         setIsLoaded(true)
    //     }
    //     loaded()
    // }, [dispatch, user.id, serverId]);

    const openNameField = () => {
        if (showNameField) return;
        setShowNameField(true)
    };

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    const HandleDelete = async () => {
                // await setIsLoaded(false)
                dispatch(serverActions.removeServer(currentServer.id))
                dispatch(serverActions.loadUsersServers(sessionUser.id))
                history.push({
                    pathname: `/@me/${pathId}`,
                });
                // await dispatch(serverActions.loadUsersServers(user.id))
                // await setIsLoaded(true)
    };

    const HandleNameEdit = async (e) => {
        setShowNameField(false)
        dispatch(serverActions.putServer({ newName, currentServer }))
        await dispatch(serverActions.loadUsersServers(sessionUser.id))
    };

    return (
        <div className='server-dropdown'>
            <p className='current-server-name'>{currentServer?.name}</p>
            {location.pathname === `/servers/${serverId}` && (
                <div>
                    {/* {belongsToUser && */}
                    <i className="fa-solid fa-angle-down" onClick={openMenu}></i>
                    {/* } */}
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
