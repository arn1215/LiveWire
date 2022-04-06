import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { loadUsersServers } from "../../src/store/server"
import ChannelCard from './ChannelCard'

const SideBar = () => {

    const dispatch = useDispatch();
    const servers = useSelector((state) => state.servers)
    const user = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(loadUsersServers(user.id));
    }, []);

    if (!servers) {
        return null
    }

    // const allServers = Object.values(servers);

    const channelsComponents = user.servers.channel.map((channel) => {
        return (
            <>
                <li key={channel?.id}>
                    <Link to={`/channels/${channel.id}`}>
                        {channel?.name}
                    </Link>
                </li>
            </>
        )
    });

    return (
        <div className="server-bar">
            { channelsComponents }
            </div>

//     return (
//         <>


//             <div className="side-bar">
//                 <div className="server-info">
//                     THIS IS SERVER INFO AND STUFF
//                 </div>
//                 <ChannelCard />


//             </div>
//         </>

    )
};


export default SideBar;
