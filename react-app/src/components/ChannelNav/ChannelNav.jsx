import './ChannelNav.css'
import React from 'react'
import ServerChannels from '../ChannelsList/ServerChannels'
import UserDMs from '../ChannelsList/UserDMs'
import ServerDropDown from '../ServerDropdown/index'
import { useLocation, useParams } from "react-router-dom";

function ChannelNav() {
    const {serverId, channelId} = useParams();
    const location = useLocation();

    if (location.pathname === `/@me/${serverId}` || location.pathname === `/@me/${serverId}/dm/${channelId}`) {
        return (
            <div className='channel-nav'>
                <ServerDropDown />
                <UserDMs />
            </div>
        )} else {
        return (
            <div className='channel-nav'>
                <ServerDropDown />
                <ServerChannels />
            </div>
        )}
}

export default ChannelNav
