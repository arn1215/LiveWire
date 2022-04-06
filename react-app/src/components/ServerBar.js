import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { loadUsersServers } from "../../src/store/server"
import CreateServer from "../components/CreateServer";



const ServerBar = () => {
    const dispatch = useDispatch();
    const servers = useSelector((state) => state.servers)
    const user = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(loadUsersServers(user.id));
    }, []);

    const allServers = Object.values(servers);

    const serversComponents = allServers.map((server) => {
        return (
            <div className="server-bar">
                <li key={server.id}>
                    <Link to={`/servers/server.id`}
                </li>



                {/* <a href="server/:serverId">
                    <div className="server-icon"></div>
                </a>
                <a href="server/:serverId">
                    <div className="server-icon"></div>
                </a>
                <a href="server/:serverId">
                    <div className="server-icon"></div>
                </a> */}
                <CreateServer />
            </div>
        )
    }

    })



export default ServerBar;
