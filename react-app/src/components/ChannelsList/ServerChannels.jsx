import './ChannelsList.css'
import CreateChannel from '../CreateChannel/index';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import * as actionChannels from '../../store/channel'

const ServerChannels = () => {
    const history = useHistory();
    const [channelName, setChannelName] = useState()
    const dispatch = useDispatch();
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
                            <p /* onClick={} */ className='sc-name'>{`${channel.name}`}</p>
                            <button onClick={() => dispatch(actionChannels.updateChannel).then(history.push(`/servers/${serverId}`))} className="sc-edit-button">Edit</button>
                            <button className="sc-delete-button">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServerChannels;
