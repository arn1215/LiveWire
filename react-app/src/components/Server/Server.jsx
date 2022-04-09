import './Server.css'
import React from 'react'
import ChannelNav from '../../components/ChannelNav/ChannelNav'
import MessageComponent from '../../components/MessageComponent/MessageComponent'
import UserList from '../../components/UserList/UserList'

function Server() {
    return (
        <div className='server'>
            <ChannelNav />
            <MessageComponent />
            <UserList />
        </div>
    )
}

export default Server
