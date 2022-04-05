const GET_CHANNEL = 'channels/getChannel'

const ADD_CHANNEL = 'channels/addChannel'

const DELETE_CHANNEL = 'channels/deleteChannel'

const EDIT_CHANNEL = 'channels/editChannel'


const getChannel = (channel) => {
    return {
        type: GET_CHANNEL,
        payload: channel
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


export const fetchChannel = (channel) => async (dispatch) => {
    const res = await fetch(`/api/channels/{channel.id}`);

    if (res.ok) {
        const channel = await res.json();
        dispatch(getChannel(channel["channel"]));
    }


export const updateChannel = (channel) => async (dispatch) => {
    const res = await fetch(`/api/channels/{channel.id}`, {
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
    dispatch(deleteChannel(id))
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


const initialState = {}

export const channelReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_CHANNEL:
            newState = {...state}
            newState[action.channel.id] = action.channel
            return newState
        case EDIT_CHANNEL:
            newState = {...state}
            newState[action.channel.id] = action.channel
            return newState
        case DELETE_CHANNEL:
            newState = {...state}
            delete newState[action.payload.id]
            return newState
        default:
            return state
    }
}
