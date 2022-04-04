import React, {  } from "react";
import CreateServer from "../components/CreateServer";


// const handleClick = (e) => {
//     e.preventDefault()


// }

const ServerBar = () => {
    return (
        <div className="server-bar">
            <a href="server/:serverId">
                <div className="server-icon"></div>
            </a>
            <a href="server/:serverId">
                <div className="server-icon"></div>
            </a>
            <a href="server/:serverId">
                <div className="server-icon"></div>
            </a>
            <CreateServer />
        </div>
    )
}



export default ServerBar;
