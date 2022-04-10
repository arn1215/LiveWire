import './ChannelNav.css'
import React from 'react'
import ServerChannels from '../ChannelsList/ServerChannels'
import UserDMs from '../ChannelsList/UserDMs'
import ServerDropDown from '../ServerDropdown/index'
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from 'react-redux'


function ChannelNav() {
    const location = useLocation();
    const home = useSelector(state => Object.values(state.server.userServers));
    const pathId = home[0].id


    if (location.pathname === `/@me/${pathId}`) {
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
