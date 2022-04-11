import './ChannelsList.css'
import { useDispatch, useSelector } from 'react-redux';
import * as messageActions from '../../store/message'
import * as channelActions from '../../store/channel'
import { Link, useParams } from 'react-router-dom';

const ServerChannels = () => {
    const {serverId} = useParams();
    const dispatch = useDispatch();
    const channels = useSelector(state => Object.values(state.channel.allChannels))
    const user = useSelector(state => state.session.user)

    return (
        <div className="sc">
            <div className="user-name">{user.username}</div>
            <div className="sc-wrapper">
                {channels.map(channel => (
                    <div key={channel.id} className="sc-channels">
                        <div className="channel-wrapper">
                            <p className='channel-icon'>#</p>
                            <Link to={`/@me/${serverId}/dm/${channel.id}`} className='sc-name' onClick={() => dispatch(messageActions.fetchMessages(channel.id), dispatch(channelActions.loadOneChannel(channel.id)))}>{channel.name}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServerChannels;
