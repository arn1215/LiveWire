import React, { useState, useHistory } from "react";


const handleClick = (e) => {
    e.preventDefault()


}


const ServerBar = () => {
    return (
        <div className="server-bar">
            <a href="/servers">
                <div className="server-icon">
                    +
                </div>
            </a>
            <a href="server/:serverId">
                <div className="server-icon">

                </div>
            </a>
            <a href="server/:serverId">
                <div className="server-icon">

                </div>
            </a>
            <a href="server/:serverId">
                <div className="server-icon">

                </div>
            </a>
        </div>
    )
}



export default ServerBar;
