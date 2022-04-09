import './ChannelNav.css'
import React from 'react'
import ServerChannels from '../ChannelsList/ServerChannels'
// import ServerDropDown from '../ServerDropdown/index'

function ChannelNav() {
    return (
        <div className='channel-nav'>
            {/* <ServerDropDown /> */}
            <ServerChannels />
        </div>
    )
}

export default ChannelNav
