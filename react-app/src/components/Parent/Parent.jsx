import './Parent.css'
import React from 'react'
import ServerNav from '../../components/ServerNav/ServerNav';
import ChannelNav from '../../components/ChannelNav/ChannelNav'

function Parent() {
    return (
        <div className='parent'>
            <ServerNav />
            <ChannelNav />
            {/* <MessageComponent /> */}
        </div>
    )
}

export default Parent
