import './Server.css'
import React from 'react'
import ChannelNav from '../../components/ChannelNav/ChannelNav'
import MessageComponent from '../../components/MessageComponent/MessageComponent'
import UserList from '../../components/UserList/UserList'
// import ExplorerList from '../ExplorerList'
import {useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Server() {
    // const location = useLocation();
    const messages = useSelector(state => state.messages)

    // if (location.pathname === '/explorer') {
    //     return (
    //         <div className='server'>
    //             <ExplorerList />
    //         </div>
    //     )
    //     } else {
        return (
            <div className='server'>
                <ChannelNav />
                {messages && (<MessageComponent />
                )}
                <UserList />
            </div>
        )
    // }
}

export default Server
