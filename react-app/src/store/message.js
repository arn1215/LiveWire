const GET_MESSAGES = 'messages/getMessages'

const ADD_MESSAGE= 'messages/addMessage'

const DELETE_MESSAGE = 'messages/deleteMessage'

const EDIT_MESSAGE = 'messages/editMessage'

const getMessages = (messages) => {
    return {
        type: GET_MESSAGES,
        payload: messages
    }
}

const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        payload: message
    }
}

const deleteMessage = (id) => {
    return {
        type: DELETE_MESSAGE,
        payload: id
    }
}

const editMessage = (message) => ({
    type: EDIT_MESSAGE,
    payload: message
})

export const fetchMessages = (channel_id) => async (dispatch) => {
    const res = await fetch(`/api/messages/${channel_id}`);

    if (res.ok) {
        const messages = await res.json();
        dispatch(getMessages(messages));
    }
};

export const createMessage = ({ channel_id, message_owner_id, content }) => async (dispatch) => {
    const res = await fetch(`/api/messages/${channel_id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message_owner_id,
            content,
        })
    });


    const data = await res.json();
    dispatch(addMessage(data));
    return data;
};

export const updateMessage = ({ message_id, content }) => async (dispatch) => {
    const res = await fetch(`/api/messages/${message_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({content})
    })
    const data = await res.json();
    dispatch(editMessage(data));
    return data;
};

export const removeMessage = (message_id) => async (dispatch) => {
    const res = await fetch(`/api/messages/delete/${message_id}`, {
        method: 'DELETE',
    })
    dispatch(deleteMessage(message_id))
};

const initialState = {}

export default function messageReducer(state = initialState, action) {
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
