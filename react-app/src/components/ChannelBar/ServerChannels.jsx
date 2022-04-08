import './Channels.css'
import CreateChannel from '../CreateChannel/index';
import { useDispatch, useSelector } from 'react-redux';
import * as channelActions from '../../store/channel';
import * as serverActions from "../../store/server";
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServerChannels = () => {
    const dispatch = useDispatch();
    const { serverId } = useParams();
    const server = useSelector(state => (state.server.userServers))
    useSelector(state => state.server)

    let channels;
    if (Object.keys(server).length) {
        channels = Object.values(server[serverId].channels)
    }

    return channels && (
        <div className="c">
            <div className="c-wrapper">
                {channels.map(channel => (
                    <div key={channel.id} className="c-channels">
                        {`# ${channel.name}`}
                    </div>
                ))}
            </div>
        <CreateChannel />
        </div>
    )
}

export default ServerChannels;
