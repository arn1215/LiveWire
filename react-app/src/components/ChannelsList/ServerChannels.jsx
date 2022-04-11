import './ChannelsList.css'
import CreateChannel from '../CreateChannel/index';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import EditTextChannelNameModal from '../EditTextChannelNameModal'
import DeleteConfirmationModal from '../DeleteConfirmationModal'
import * as messageActions from '../../store/message'
import { useState } from 'react';
import { useEffect } from 'react';

const ServerChannels = () => {
    const dispatch = useDispatch();
    const { serverId } = useParams();
    const server = useSelector(state => (state.server.userServers))
    const channels = useSelector(state => state.channel.allChannels)
    const [channelsArr, setChannelsArr] = useState([])
    const [loaded, setLoaded] = useState(false)




    useEffect(() => {
        setChannelsArr((state) => {
            return Object.values(channels)
        })
        // setLoaded(true)
        console.log('Setting')
    }, [channels])

    useEffect(() => {
        console.log('Channels! ', channelsArr)
        setLoaded(true)
    }, [channelsArr])



    return loaded && (
        <div className="sc">
        <CreateChannel />
            <div className="sc-wrapper">
                {channelsArr.map(channel => (
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
