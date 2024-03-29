import './Parent.css'
import React, { useEffect, useState } from 'react'
import * as serverActions from "../../store/server";
import ServerNav from '../../components/ServerNav/ServerNav';
import Server from '../../components/Server/Server';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as channelActions from "../../store/channel";

function Parent() {
    const dispatch = useDispatch();
    const {serverId} = useParams();
    const [isLoaded, setIsLoaded] = useState(false)
    const user = useSelector(state => state.session.user);

    useEffect(() => {

    })

    useEffect(() => {
        const loaded = async () => {
            await dispatch(serverActions.loadUsersServers(user.id))
            await dispatch(serverActions.loadServerById(serverId))
            await dispatch(channelActions.loadAllChannels(serverId))
            await dispatch(serverActions.loadAllServers())
            setIsLoaded(true)
        }
        loaded()
    }, [dispatch, user.id, serverId]);

    return isLoaded && (
        <div className='parent'>
            <ServerNav />
            <Server />
        </div>
    )
}

export default Parent
