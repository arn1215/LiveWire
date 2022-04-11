import React from "react";
import CreateServerModal from "../../components/CreateServer/index";
// import Explorer from "../../components/Explorer/index"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './ServerList.css'

const ServerList = () => {
    const userServers = useSelector(state => Object.values(state.server.userServers))

    return  (
        <div className="sl">
            <div className="sl-icon-wrapper">
                {userServers.slice(0, 1).map(server => (
                    <div key={server.id} className="sl-home-icon">
                        <Link  to={`/@me/${server.id}`}>
                            <img src={server.icon} alt="" className="sl-server-icon" />
                        </Link>
                    </div>
                    ))}
                    {userServers.slice(1).map(server => (
                        <Link key={server.id} to={`/servers/${server.id}`}>
                            <img src={server.icon} alt="" className="sl-server-icon" />
                        </Link>
                    ))}
            </div>
            <CreateServerModal />
            {/* <Explorer /> */}
        </div>
    );
};

export default ServerList;
