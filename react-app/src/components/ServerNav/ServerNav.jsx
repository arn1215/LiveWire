import React from "react";
import ServerList from '../ServerList/ServersList'
import './ServerNav.css'

const ServerNav = () => {
    return (
        <div className="sn">
            <h2 className="sn-title">LiveWire</h2>
            <div className="sn-wrapper">
                <ServerList />
            </div>
        </div>
    );
};

export default ServerNav;
