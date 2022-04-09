import './ChannelNav.css'
import React from 'react'
import ServerChannels from '../ChannelsList/ServerChannels'
// import UserDMs from '../ChannelsList/UserDMs'
// import ServerDropDown from '../ServerDropdown/index'

function ChannelNav() {
    return (
        <div className='channel-nav'>
            {/* <ServerDropDown /> */}
            {/* if (route == @me){
                <UserDMs />
            } else {

            }*/}
            <ServerChannels />
        </div>
    )
}

export default ChannelNav
