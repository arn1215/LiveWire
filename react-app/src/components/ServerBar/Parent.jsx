import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ServerChannels from '../ChannelBar/ServerChannels';
import * as serverActions from "../../store/server";
import ServerBar from './ServerBar';

function Parent() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const userId = useSelector(state => state.session.user.id);

    useEffect(() => {
        const loaded = async () => {
            await dispatch(serverActions.loadUsersServers(userId))
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
