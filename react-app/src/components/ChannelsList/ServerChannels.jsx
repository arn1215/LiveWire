import './ChannelsList.css'
import CreateChannel from '../CreateChannel/index';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ServerChannels = () => {
    const { serverId } = useParams();
    const server = useSelector(state => (state.server.userServers))
    useSelector(state => state.server)

    let channels;
    if (Object.keys(server).length) {
        channels = Object.values(server[serverId].channels)
    }

    return channels && (
        <div className="sc">
        <CreateChannel />
            <div className="sc-wrapper">
                {channels.map(channel => (
                    <div key={channel.id} className="sc-channels">
                        <div className="channel-wrapper">
                            <p className='channel-icon'>#</p>
                            <p className='sc-name'>{`${channel.name}`}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServerChannels;
