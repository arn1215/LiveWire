import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as sessionChannel from '../../store/channel'
import './UserList.css'

function UserList() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const users = useSelector(state => state.server.oneServer.server.users)
    const servers = useSelector(state => Object.values(state.server.allServers))
    const homeServer = servers[0]

    return (
        <div className='user-list'>
            {users.map((user) => (
                <div key={user.id} className="username-wrapper">
                    <div className='username' onClick={() => dispatch(sessionChannel.createDM(sessionUser.id, user.id), dispatch(sessionChannel.loadAllChannels(homeServer.id)))}>
                    {user.username}
                    </div>
                </div>
            ))}
        </div>
    )
}
// {`/@me/${serverId}/dm/${channelId}`}
export default UserList
