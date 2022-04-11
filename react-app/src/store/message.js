const GET_MESSAGES = 'messages/getMessages'

const ADD_MESSAGE= 'messages/addMessage'

// const DELETE_MESSAGE = 'messages/deleteMessage'

const EDIT_MESSAGE = 'messages/editMessage'

const getMessages = (messages) => {
    return {
        type: GET_MESSAGES,
        messages
    }
}

const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        payload: message
    }
}

// const deleteMessage = (id) => {
//     return {
//         type: DELETE_MESSAGE,
//         payload: id
//     }
// }

const editMessage = (message) => ({
    type: EDIT_MESSAGE,
    payload: message
})

export const fetchMessages = (channel_id) => async (dispatch) => {
    const res = await fetch(`/api/messages/${channel_id}`);

    if (res.ok) {
        const {messages} = await res.json();
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
            channel_id,
            message_owner_id,
            content,
        })
    });

    const data = await res.json();
    dispatch(addMessage(data));
    // return data;
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

// export const removeMessage = ({ message_id, channel_id }) => async (dispatch) => {
//     const res = await fetch(`/api/messages/delete/${message_id}/${channel_id}`, {
//         method: 'DELETE',
//     })
//     if (res.ok) {
//         const messages = await res.json();
//         dispatch(getMessages(messages.messages));
//     }
// };

export default function messageReducer(state = {
   allMessages: {},
}, action) {
    let newState = {...state};
    switch (action.type) {
        case GET_MESSAGES:
            const allMessageNew = {}
            action.messages.forEach(message => {
            allMessageNew[message.id] = message
            })
            return {...state, allMessages: allMessageNew}
        case ADD_MESSAGE:
            const newAllMessages = {}
            newAllMessages[action.payload.id] = action.payload
            return {...state, allMessages: newAllMessages}
        case EDIT_MESSAGE:
            const newAllM = {}
            newAllM[action.payload.id] = action.payload
            return {...state, allMessages: newAllM}
        // case DELETE_MESSAGE:
        //     newState = {...state}
        //     delete newState[action.payload.id]
        //     return newState
        default:
            return state
    }
};
