import './ChannelsList.css'
import CreateChannel from '../CreateChannel/index';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import EditTextChannelNameModal from '../EditTextChannelNameModal'
import DeleteConfirmationModal from '../DeleteConfirmationModal'
import * as messageActions from '../../store/message'

const ServerChannels = () => {
    const dispatch = useDispatch();
    const { serverId } = useParams();
    const server = useSelector(state => (state.server.userServers))

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
                            <div className='sc-name' onClick={() => dispatch(messageActions.fetchMessages(channel.id))}>{channel.name}</div>
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
