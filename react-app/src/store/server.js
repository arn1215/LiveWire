const LOAD_USER_SERVERS = 'servers/LOAD_USER_SERVERS'
const LOAD_SERVERS = 'servers/LOAD_SERVERS'
const LOAD_SERVER = 'servers/LOAD_SERVER'
const ADD_SERVER = 'servers/ADD_SERVER'
const EDIT_SERVER = 'servers/EDIT_SERVER'
const DELETE_SERVER = 'servers/DELETE_SERVER'

// actions
const loadUserServers = (user_Servers) => {
    return {
        type: LOAD_USER_SERVERS,
        user_Servers
    };
};

const loadServers = (servers) => {
    return {
        type: LOAD_SERVERS,
        servers
    };
};

const loadServer = (server) => {
    return {
        type: LOAD_SERVER,
        server
    }
}

const addServer = (server) => {
    return {
        type: ADD_SERVER,
        server
    }
}

const editServer = (updatedServer) => {
    return {
        type: EDIT_SERVER,
        updatedServer
    }
}

const deleteServer = (serverId) => {
    return {
        type: DELETE_SERVER,
        serverId
    }
}

// thunks

//Edit a server

export const putServer = ({ newName, currentServer }) => async (dispatch) => {
    const res = await fetch(`/api/servers/${currentServer.id}`, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
          },
        body: JSON.stringify(newName),
    });
    if (res.ok) {
        const updatedServer = await res.json()
        dispatch(editServer(updatedServer))
        return updatedServer;
    }
}

//load all servers

export const loadAllServers = () => async (dispatch) => {
    const res = await fetch(`/api/servers/`);

    if (res.ok) {
        const servers = await res.json();
        dispatch(loadServers(servers.servers));
    }
};

//load one server

export const loadServerById = (id) => async (dispatch) => {
    const res = await fetch(`/api/servers/${id}`)

    if (res.ok) {
        const server = await res.json();
        dispatch(loadServer(server.server))
    }
}

//load user's servers

export const loadUsersServers = (userId) => async (dispatch) => {
    const res = await fetch(`/api/servers/byUser/${userId}`);

    if (res.ok) {
        const servers = await res.json();
        const userServers = servers['servers'];
        dispatch(loadUserServers(userServers))
    }
}

//create new server

export const createServer = ({ owner_id, name, icon, invite_URL }) => async (dispatch) => {
    const res = await fetch('/api/servers/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            owner_id,
            name,
            icon,
            invite_URL
        })
    });

    const data = await res.json();

    dispatch(addServer(data));
    return data;
};

//delete server

export const removeServer = (id) => async (dispatch) => {
    const res = await fetch(`/api/servers/delete/${id}`, { method: 'DELETE' })
    if (res.ok) {
        dispatch(deleteServer(id))
    }
}

const serversReducer = (state={
    oneServer: {},
    allServers: {},
    userServers: {},
}, action) => {
    let newState = {...state}

    switch (action.type) {
        case ADD_SERVER: {
            newState.allServers[action.server.id] = action.server
            return newState;
        }
        case LOAD_SERVERS: {
            action.servers.forEach(server => {
                newState.allServers[server.id] = server;
            })
            return newState;
        }
        case LOAD_USER_SERVERS: {
            action.user_Servers.forEach(server => {
                newState.userServers[server.id] = server
            })
            return newState;
        }
        case DELETE_SERVER: {
            delete newState.allServers[action.serverId]
            return newState;
        }
        case LOAD_SERVER: {
            newState.oneServer.server = action.server
            return newState;
        }
        case EDIT_SERVER: {
            newState.allServers[action.updatedServer.id] = action.updatedServer
            return newState;
        }
        default:
            return state;
    }
};

export default serversReducer;
