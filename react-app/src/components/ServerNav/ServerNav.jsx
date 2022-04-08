import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateServerModal from "../CreateServer";
import ServerList from '../ServerList/ServersList'
import * as serverActions from "../../store/server";
import './ServerNav.css'

const ServerNav = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const user = useSelector(state => state.session.user);


    useEffect(() => {
        const loaded = async () => {
            await dispatch(serverActions.loadUsersServers(user.id))
            setIsLoaded(true)
        }
        loaded()
    }, [dispatch]);

    return isLoaded && (
        <div className="sb">
            <ServerList />
            <CreateServerModal />
        </div>
    );
};

export default ServerNav;
