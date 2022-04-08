import './SideBar.css'
import CreateChannel from '../CreateChannel/index';
import { useDispatch, useSelector } from 'react-redux';
import * as channelActions from '../../store/channel';
import { useEffect, useState } from 'react';

const Channels = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const userId = useSelector(state => state.session.user.id);
    const server = useSelector(state => (state.server.oneServer))
    console.log('this is server...', server)


    useEffect(() => {
        const loaded = async () => {

        }
        loaded()
    }, [dispatch]);


    return (
        isLoaded && (
        <div className="c">
            <div className="sb-channels-wrapper">
                {/* {channel.map} */}
            </div>
        <CreateChannel />
        </div>
        )
    )
}

export default Channels;
