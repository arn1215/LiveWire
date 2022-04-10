import './Server.css'
import React from 'react'
import ChannelNav from '../../components/ChannelNav/ChannelNav'
import MessageComponent from '../../components/MessageComponent/MessageComponent'
import UserList from '../../components/UserList/UserList'
import ExplorerList from '../ExplorerList'
import {useLocation} from 'react-router-dom'

function Server() {
    const location = useLocation();

    if (location.pathname === '/explorer') {
        return (
            <div className='server'>
                <ChannelNav />
                <ExplorerList />
                <UserList />
            </div>
        )
        } else {
        return (
            <div className='server'>
                <ChannelNav />
                <MessageComponent />
                <UserList />
            </div>
        )
    }
}

export default Server
