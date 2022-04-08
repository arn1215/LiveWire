const GET_CHANNEL = 'channels/getChannel'

const GET_ALL_CHANNELS = 'channels/GET_ALL_CHANNELS'

const ADD_CHANNEL = 'channels/addChannel'

const DELETE_CHANNEL = 'channels/deleteChannel'

const EDIT_CHANNEL = 'channels/editChannel'

// Actions
const getAllChannels = (channels) => {
    return {
        type: GET_ALL_CHANNELS,
        channels
    }
}

const getChannel = (channel) => {
    return {
        type: GET_CHANNEL,
        channel
    }
}

const addChannel = (channel) => {
    return {
        type: ADD_CHANNEL,
        payload: channel
    }
}

const deleteChannel = (id) => {
    return {
        type: DELETE_CHANNEL,
        payload: id
    }
}

const editChannel = (channel) => ({
    type: EDIT_CHANNEL,
    payload: channel
})

//Thunks
export const loadAllChannels = (serverId) => async (dispatch) => {
    const res = await fetch(`/api/channels/byServer/${serverId}`);

    if (res.ok) {
        const channels = await res.json();
        dispatch(getAllChannels(channels.channel));
    }
};

// export const fetchChannels = (channel) => async (dispatch) => {
//     const res = await fetch(`/api/channels/${channel.id}}`);

//     if (res.ok) {
//         const channel = await res.json();
//         dispatch(getChannel(channel["channel"]));
//     }
// }

export const updateChannel = (channel) => async (dispatch) => {
    const res = await fetch(`/api/channels/${channel.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({channel})
    })
    const channelToUpdate = await res.json()
    dispatch(editChannel(channelToUpdate))
    return channelToUpdate

}

export const removeChannel = (id) => async (dispatch) => {
    const res = await fetch(`/api/channels/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    })
    if (res.ok) {
        const id = await res.json()
        dispatch(deleteChannel(id))
    }
}


export const createChannel = ({ name, server_id}) => async (dispatch) => {
    const res = await fetch('/api/servers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            server_id,
        })
    });


    const data = await res.json();
    dispatch(addChannel(data));
    return data
};


// Reducer
export default function channelReducer(state = {
    currentChannel: [],
    allChannels: [],
}, action) {
    let newState = {...state};
    switch (action.type) {
        case GET_CHANNEL:
            newState.currentChannel.channels = action.channel
            return newState;
        case GET_ALL_CHANNELS:
            action.channels.forEach(channel => {
                newState.allChannels[channel.id] = channel;
            });
            return newState;
        case ADD_CHANNEL:
            newState.allChannels[action.payload.id] = action.payload
            return newState;
        case EDIT_CHANNEL:
            newState.allChannels[action.payload.id] = action.payload
            return newState;
        case DELETE_CHANNEL:
            delete newState.allChannels[action.payload.id]
            return newState;
        default:
            return state
    }
}
