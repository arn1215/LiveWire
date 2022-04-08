import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as serverActions from "../../store/server";
import CreateServerModal from "../CreateServer";
import { Link } from "react-router-dom";
import './ServerBar.css'

const ServerBar = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const userId = useSelector(state => state.session.user.id);
    const userServers = useSelector(state => Object.values(state.server.userServers))


    return (
        <div className="sb">
            <div className="sb-icon-wrapper">
                {userServers.map(server => (
                    <Link key={server.id} to={`/servers/${server.id}`}>
                        <img src={server.icon} alt="" className="sb-server-icon" />
                    </Link>
                ))}
            </div>
            <CreateServerModal />
        </div>
    );
};

export default ServerBar;
