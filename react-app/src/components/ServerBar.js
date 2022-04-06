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

    // if (!servers) {
    //     return null
    // }

    // const allServers = Object.values(servers);

    const serversComponents = user.servers.map((server) => {
     return (
      <>
        <li key={server?.id}>
            <Link to={`/servers/${server.id}`}>
                {server?.name}
            </Link>
        </li>
        <CreateServer />
      </>
    )
  });

    return (
        <div className="server-bar">
        { serversComponents }
        </div>

    )
};


export default ServerBar;

{/* <a href="server/:serverId">
    <div className="server-icon"></div>
</a>
<a href="server/:serverId">
    <div className="server-icon"></div>
</a>
<a href="server/:serverId">
    <div className="server-icon"></div>
</a> */}
