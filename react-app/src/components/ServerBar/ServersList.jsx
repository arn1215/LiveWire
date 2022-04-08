import React from 'react'

function Server() {
    return (
        <div>
            <div className="sb-icon-wrapper">
                {userServers.slice(1).map(server => (
                    <Link key={server.id} to={`/servers/${server.id}`}>
                        <img src={server.icon} alt="" className="sb-server-icon" />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Server
