const SET_SERVERS = 'servers/setServer'

const ADD_SERVER = 'servers/addServer'

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

export const createServer = ({ owner_id, name, icon }) => async (dispatch) => {
    await fetch('/api/servers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            owner_id,
            name,
            icon
        })
    });

    const allServers = await fetch('/api/servers');
    const data = await server.json();
    dispatch(addServer(data));
    return allServers;
};

const initialState = {};

const serversReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case SET_SERVERS:
            newState = {...state};
            newState[action.server.id] = action.
            return newState;
    }
};
