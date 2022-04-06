const LOAD_SERVERS = 'servers/loadServer'

const ADD_SERVER = 'servers/addServer'

const DELETE_SERVER = 'servers/deleteServer'

const loadServers = (servers) => {
    return {
        type: LOAD_SERVERS,
        payload: servers
    };
};

const addServer = (server) => {
    return {
        type: ADD_SERVER,
        payload: server
    }
}

const deleteServer = (id) => {
    return {
        type: DELETE_SERVER,
        payload: id
    }
}

// thunk


//load all servers

export const loadAllServers = () => async (dispatch) => {
    const res = await fetch(`/api/servers/`);
    if (res.ok) {
        const servers = await res.json();
        dispatch(loadServers(servers.servers));
    }
};


//load user's servers

export const loadUsersServers = (userId) => async (dispatch) => {
    const res = await fetch(`/api/servers/byUser/${userId}`);

    if (res.ok) {
        const servers = await res.json();
        const userServers = servers['servers'];
        // for (let server of userServers) {
        //     const channelsPopulate = await fetch(`/api/channels/byServer/${server.id}`);
        //     const serverChannels = await channelsPopulate.json();
        // }
        dispatch(loadServers(userServers))
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
    const res = await fetch(`/api/servers/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    })

    dispatch(deleteServer(id))
}





const initialState = {};

export default function serversReducer (state = initialState, action) {
    let newState
    switch (action.type) {
        case ADD_SERVER:
            newState = {...state};
            newState[action.server.id] = action.server
            return newState;
        case LOAD_SERVERS:
            newState = {...state};
            action.payload.forEach(server => {
                newState[server.id] = server
            })
            return newState;
        case DELETE_SERVER:
            newState = {...state};
            delete newState[action.payload.id]
            return newState
        default:
            return state;
    }
};
