import './ChannelsList.css'
import CreateChannel from '../CreateChannel/index';
import { useDispatch, useSelector } from 'react-redux';
import EditTextChannelNameModal from '../EditTextChannelNameModal'
import DeleteConfirmationModal from '../DeleteConfirmationModal'
import * as messageActions from '../../store/message'
import * as channelActions from '../../store/channel'
import { Link, useParams } from 'react-router-dom';

const ServerChannels = () => {
    const {serverId, channelId} = useParams();
    const dispatch = useDispatch();
    const channels = useSelector(state => Object.values(state.channel.allChannels))

    return (
        <div className="sc">
        <CreateChannel />
            <div className="sc-wrapper">
                {channels.map(channel => (
                    <div key={channel.id} className="sc-channels">
                        <div className="channel-wrapper">
                            <p className='channel-icon'>#</p>
                            <Link to={`/servers/${serverId}/channels/${channel.id}`} className='sc-name' onClick={() => dispatch(messageActions.fetchMessages(channel.id), dispatch(channelActions.loadOneChannel(channel.id)))}>{channel.name}</Link>
                            <EditTextChannelNameModal currentChannelName={channel.name} channelId={channel.id}/>
                            <DeleteConfirmationModal currentChannelName={channel.name} channelId={channel.id}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServerChannels;
