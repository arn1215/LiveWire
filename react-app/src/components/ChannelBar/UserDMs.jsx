import './Channels.css'
import CreateChannel from '../CreateChannel/index';
import { useDispatch, useSelector } from 'react-redux';
import * as channelActions from '../../store/channel';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserChannels = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const userId = useSelector(state => state.session.user.id);

    useEffect(() => {
        // dispatch(channelActions.loadAllChannels(user.id));
    }, []);


    return (
        <div className="c">
            <div className="c-wrapper">

            </div>
        <CreateChannel />
        </div>
    )
}

export default UserChannels;
