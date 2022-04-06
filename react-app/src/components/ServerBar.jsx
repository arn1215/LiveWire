import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as serverActions from "../../src/store/server";
import CreateServerModal from "../components/CreateServer";
import { Link } from "react-router-dom";
import '../index.css'

const ServerBar = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const userId = useSelector(state => state.session.user.id);
    const userServers = useSelector(state => (state.server.userServers))
    console.log('this is USER,', userId)

    useEffect(() => {
        const loaded = async () => {
            await dispatch(serverActions.loadUsersServers(userId))
            setIsLoaded(true)
        }
        loaded()
    }, [dispatch]);

    return (
        isLoaded && (
            <div className="server-bar">
                <div className="sb-servers-wrapper">
                    {userServers.map(server => {
                        {console.log('this is serverid...,', server.id)}
                        <div key={server.id} className="sb-server-wrapper">
                            <Link onClick={(e) => dispatch()} to={`/servers/${server.id}`}>
                                <img src={server.icon} alt="" className="sb-server-icon" />
                            </Link>
                        </div>
                })}
                </div>
                <CreateServerModal />
            </div>
        )
    );
};

export default ServerBar;
