import './Parent.css'
import React, { useEffect, useState } from 'react'
import * as serverActions from "../../store/server";
import ServerNav from '../../components/ServerNav/ServerNav';
import Server from '../../components/Server/Server';
import { useDispatch, useSelector } from 'react-redux';

function Parent() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const user = useSelector(state => state.session.user);


    useEffect(() => {
        const loaded = async () => {
            await dispatch(serverActions.loadUsersServers(user.id))
            setIsLoaded(true)
        }
        loaded()
    }, [dispatch, user.id]);

    return isLoaded && (
        <div className='parent'>
            <ServerNav />
            <Server />
            {/* <MessageComponent /> */}
        </div>
    )
}

export default Parent
