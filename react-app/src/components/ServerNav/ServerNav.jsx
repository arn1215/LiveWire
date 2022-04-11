import React from "react";
import { Link } from "react-router-dom";
import ServerList from '../ServerList/ServersList'
import './ServerNav.css'

const ServerNav = () => {
    return (
        <div className="sn">
            <Link className="linkToHome" to={`/`}>
                <h2 className="sn-title">LiveWire</h2>
            </Link>
            <div className="sn-wrapper">
                <ServerList />
            </div>
        </div>
    );
};

export default ServerNav;
