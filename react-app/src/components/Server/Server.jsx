import './Server.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ServerChannels from '../ChannelBar/ServerChannels';
import ServerNav from '../ServerNav/ServerNav';
// import MessageComponent from '../MessageComponent/MessageComponent';
import * as serverActions from "../../store/server";

function Server() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const user = useSelector(state => state.session.user);


    useEffect(() => {
        const loaded = async () => {
            await dispatch(serverActions.loadUsersServers(user.id))
            setIsLoaded(true)
        }
        loaded()
    }, [dispatch]);

    return isLoaded && (
    <div>
        <ServerNav />
        <ServerChannels />
        {/* <MessageComponent /> */}
    </div>
    )
}

export default Server;
