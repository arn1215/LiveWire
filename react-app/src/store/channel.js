const ADD_CHANNEL = 'channels/addChannel'


const addChannel = (channel) => {
    return {
        type: ADD_CHANNEL,
        payload: channel
    }
}


export const createChannel = ({ name, server_id}) => async (dispatch) => {
    const res = await fetch('/api/channels', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            server_id
    })

    const data = await 

})