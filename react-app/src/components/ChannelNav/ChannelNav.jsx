import './ChannelNav.css'
import React from 'react'
import ServerChannels from '../ChannelsList/ServerChannels'
import UserDMs from '../ChannelsList/UserDMs'
import ServerDropDown from '../ServerDropdown/index'
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from 'react-redux'


function ChannelNav() {
    const location = useLocation();
    const {serverId} = useParams();
    const home = useSelector(state => Object.values(state.server.userServers));
    const pathId = home[0].id

    return (
        <div className='channel-nav'>
            <ServerDropDown />
            {location.pathname === `/@me/${pathId}` && (
                <UserDMs />
            )}
            {location.pathname === `/servers/${serverId}` && (
                <ServerChannels />
            )}
        </div>
    )
}

export default ChannelNav
