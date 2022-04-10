import React, {useEffect} from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadServerById } from '../../store/server'
import './UserList.css'

function UserList() {
    const dispatch = useDispatch();


    const serverInfo = useSelector((state) => state.server.oneServer)
    // // console.log("Server ------------------->", serverInfo)
    const users = serverInfo.server.users
    // console.log("users------------------------>", users)
    // const usersArray = Object.values(users)


    return (
        <div className='user-list'>
            {users.map((user) => (
                <div key={user.id} className="username-div">
                    {user.username}
                </div>
            ))}
        </div>
    )
}

export default UserList
