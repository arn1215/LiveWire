import './ChannelsList.css'
import CreateChannel from '../CreateChannel/index';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import * as actionChannels from '../../store/channel'
import EditTextChannelNameModal from '../EditTextChannelNameModal'

const ServerChannels = () => {
    const history = useHistory();
    // const [newName, setChannelName] = useState();
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
                            <Link to={`/servers/channels/${channel.id}`} className='sc-name'>{channel.name}</Link>
                            {console.log(channel.name)}
                            <EditTextChannelNameModal currentChannelName={channel.name} channelId={channel.id}/>
                            <button className="sc-delete-button">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServerChannels;
