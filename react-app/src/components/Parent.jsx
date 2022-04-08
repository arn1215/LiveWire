import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ServerChannels from './ChannelBar/ServerChannels';
import * as serverActions from "../store/server";
import ServerBar from './ServerBar/ServerBar';

function Parent() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const user = useSelector(state => state.session.user);
    console.log('user....', user)

    useEffect(() => {
        const loaded = async () => {
            await dispatch(serverActions.loadUsersServers(user.id))
            setIsLoaded(true)
        }
        loaded()
    }, [dispatch]);

    return isLoaded && (
    <div>
        <ServerBar />
        <ServerChannels />
    </div>
    )
}

export default Parent
