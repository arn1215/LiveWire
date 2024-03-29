const GET_ONE_CHANNEL = 'channels/GET_ONE_CHANNEL'

const GET_ALL_CHANNELS = 'channels/GET_ALL_CHANNELS'

const ADD_CHANNEL = 'channels/addChannel'

const DELETE_CHANNEL = 'channels/deleteChannel'

const EDIT_CHANNEL = 'channels/editChannel'

// Actions
const getOneChannel = (channel) => {
    return {
        type: GET_ONE_CHANNEL,
        channel
    }
}

const getAllChannels = (channels) => {
    return {
        type: GET_ALL_CHANNELS,
        channels
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

export const loadOneChannel = (channelId) => async (dispatch) => {
    const res = await fetch(`/api/channels/${channelId}`)

    if (res.ok) {
        const channel = await res.json();
        dispatch(getOneChannel(channel));
    }
}

export const loadAllChannels = (serverId) => async (dispatch) => {
    const res = await fetch(`/api/channels/byServer/${serverId}`);

    if (res.ok) {
        const { channels } = await res.json();
        dispatch(getAllChannels(channels));
    }
};

export const updateChannel = ({ channelName, channelId }) => async (dispatch) => {
    const res = await fetch(`/api/channels/${channelId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(channelName)

    })
    const channelToUpdate = await res.json()
    dispatch(editChannel(channelToUpdate))
    return channelToUpdate

}

export const removeChannel = (id) => async (dispatch) => {
    const res = await fetch(`/api/channels/delete/${id}`, { method: 'DELETE' })
    if (res.ok) {
        dispatch(deleteChannel(id))
    }
}


export const createChannel = ({ name, serverId }) => async (dispatch) => {
    const res = await fetch('/api/channels/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            serverId
        })
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(addChannel(data));
    }
};

export const createDM = (user_id_1, user_id_2) => async (dispatch) => {
    const res = await fetch(`/api/channels/dm/${user_id_1}/${user_id_2}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id_1,
            user_id_2
        })
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(addChannel(data));
    }
};

// Reducer
export default function channelReducer(state = {
    currentChannel: {},
    allChannels: {},
}, action) {
    let newState = { ...state };
    switch (action.type) {
        case GET_ONE_CHANNEL:
            newState.currentChannel = action.channel
            return newState;
        case GET_ALL_CHANNELS:
            const newAllChannels = {}
            action.channels.forEach(channel => {
                newAllChannels[channel.id] = channel;
            });
            return { ...state, allChannels: newAllChannels };
        case ADD_CHANNEL:
            const newAllChannelsAdd = {}
            newAllChannelsAdd[action.payload.id] = action.payload;
            return { ...state, allChannels: newAllChannelsAdd };
        case EDIT_CHANNEL:
            const newAllC = {...state.allChannels}
            newAllC[action.payload.id] = action.payload
            return {...state, allChannels: newAllC};
        case DELETE_CHANNEL:
            const newAC = {...state.allChannels}
            delete newAC[action.payload.id]
            return { ...state, allChannels: newAC };
        default:
            return state
    }
}
