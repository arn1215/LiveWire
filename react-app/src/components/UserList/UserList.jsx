import React, {useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadServerById } from '../../store/server'
import * as sessionChannel from '../../store/channel'
import './UserList.css'

function UserList() {
    const dispatch = useDispatch();

    const serverInfo = useSelector((state) => state.server.oneServer)
    // // console.log("Server ------------------->", serverInfo)
    const users = serverInfo.server.users
    // console.log("users------------------------>", users)
    // const usersArray = Object.values(users)

    const newDM = {
        name: "DM",
        serverId: 1
    }

    const handleClick = (e) => {
        e.preventDefault();

        dispatch(sessionChannel.createChannel(newDM))

    }

    return (
        <div className='user-list'>
            {users.map((user) => (
                <div key={user.id} className="username-div">
                    <Link exact to='/@me/1' onClick={handleClick}>
                    {user.username}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default UserList
