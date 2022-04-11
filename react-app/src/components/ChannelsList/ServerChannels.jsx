import './ChannelsList.css'
import CreateChannel from '../CreateChannel/index';
import { useDispatch, useSelector } from 'react-redux';
import EditTextChannelNameModal from '../EditTextChannelNameModal'
import DeleteConfirmationModal from '../DeleteConfirmationModal'
import * as messageActions from '../../store/message'
import * as channelActions from '../../store/channel'
import { Link, useParams } from 'react-router-dom';

const ServerChannels = () => {
    const {serverId} = useParams();
    const dispatch = useDispatch();
    const channels = useSelector(state => Object.values(state.channel.allChannels))

    return (
        <div className="sc">
        <CreateChannel />
            <div className="sc-wrapper">
                {channels.map(channel => (
                    <div key={channel.id} className="sc-channels">
                        <div className="channel-wrapper">
                            <div className='ci-and-cName'>
                                <p className='channel-icon'>#</p>
                                <Link className='sc-name' to={`/servers/${serverId}/channel/${channel.id}`}  onClick={() => dispatch(messageActions.fetchMessages(channel.id), dispatch(channelActions.loadOneChannel(channel.id)))}>{channel.name}</Link>
                            </div>
                            <div className='trash-and-edit'>
                                <EditTextChannelNameModal className='edit-pencil' currentChannelName={channel.name} channelId={channel.id}/>
                                <DeleteConfirmationModal className='trashcan' currentChannelName={channel.name} channelId={channel.id}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServerChannels;
