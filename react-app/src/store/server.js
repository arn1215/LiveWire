const SET_SERVERS = 'servers/setServer'

const ADD_SERVER = 'servers/addServer'

const DELETE_SERVER = 'servers/deleteServer'

const setServers = (servers) => {
    return {
        type: SET_SERVERS,
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



export const createServer = ({ owner_id, name, icon, invite_URL }) => async (dispatch) => {
    await fetch('/api/servers', {
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

    const allServers = await fetch('/api/servers');
    const data = await server.json();
    dispatch(addServer(data));
    return allServers;
};

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

const serversReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case ADD_SERVER:
            newState = {...state};
            newState[action.server.id] = action.server
            return newState;
        case SET_SERVERS:
            newState = {...state};
            action.servers.forEach(server => {
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
