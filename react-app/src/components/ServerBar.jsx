import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadUsersServers } from "../../src/store/server";
import CreateServerModal from "../components/CreateServer";

const ServerBar = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    console.log('this is USER,', user)

    useEffect(() => {
    dispatch(loadUsersServers(user.id));
    }, []);

  // if (!servers) {
  //     return null
  // }

  // const allServers = Object.values(servers);

    // const serversComponents = user.servers.map((server) => {
    //     return (
    //     <>
    //         <li key={server?.id}>
    //             <Link to={`/servers/${server.id}`} className="server-icon">
    //                 {server?.name}
    //             </Link>
    //         </li>
    //     </>
    //     );
    // });

    return (
        <>
            <div className="server-bar">
                <div className="sb-servers-wrapper">
                    {/* {user[2].map(server => {

                        <div className="sb-server-wrapper">
                            <Link> onClick={(e) => dispatch()}</Link>
                        </div>
                })} */}
                </div>
                <CreateServerModal />
            </div>
        </>
    );
};

export default ServerBar;
