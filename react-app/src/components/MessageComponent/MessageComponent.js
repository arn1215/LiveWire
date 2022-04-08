import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { createMessage, removeMessage, updateMessage } from "../../store/message";
import * as messageActions from "../../store/message";
import './Message.css'

const MessageComponent = () => {

    const dispatch = useDispatch()

    const user = useSelector((state) => state.session.user);
    // const messages = useSelector((state) => state.messages)
    const messages = [{ id: 1, content: "yo, dude", message_owner_id: 1 }, { id: 2, content: "bruh", message_owner_id: 2 }, { id: 3, content: "wagud", message_owner_id: 1 }]
    const channel = useSelector((state) => state.channel)
    const server = useSelector((state) => state.session.server)
    const [content, setContent] = useState("")
    const [editedMessageId, setEditedMessageId] = useState(null)
    const [editedMessage, setEditedMessage] = useState('')



    const onSubmit = () => {

        let message = {
            content,
            message_owner_id: user.id,
            channel_id: channel.id
        }
        setContent("")
        console.log(message)
        dispatch(messageActions.createMessage(message))

    }

    const onSubmitEdit = (messageId) => {
        let updatedMessage = {
            message_id: messageId,
            content: editedMessage
        }
        setEditedMessage("")
        dispatch(messageActions.updateMessage(updatedMessage))
    }


    const onDelete = async (message) => {
        await dispatch(messageActions.removeMessage(message.id))
    }

    const onEdit = (messageId) => {
        setEditedMessageId(messageId)
    }

    const handleOnChange = (e) => {
        setEditedMessage(e.target.value)
    }

    return (
        <>
            <div className="chat">
                <div className="message-wrap">
                    {messages.map(message => (
                        <div>
                            {editedMessageId !== message.id && (
                                <>
                                    <div key={message.id} className="message">{message?.content}</div>
                                    {user.id === message.message_owner_id && (
                                        <div>
                                            <button messageId={message.id} onClick={() => onDelete(message) }>delete</button>
                                            <button onClick={() => {onEdit(message.id)}}>edit</button>
                                        </div>
                                    )}
                                </>
                            )}

                            {editedMessageId === message.id && (
                                <>
                                    <input value={editedMessage} onChange={handleOnChange}></input>
                                    {user.id === message.message_owner_id && (
                                        <div>
                                            <button messageId={message.id} onClick={() => onDelete(message) }>delete</button>
                                            <button onClick={() => {onSubmitEdit(message.id)}}>Submit</button>
                                        </div>
                                    )}
                                </>
                            )}



                        </div>
                    ))}
                </div>






                <div className="message-container">

                    <form onSubmit={onSubmit}>
                        {/*
                        <textarea
                            placeholder={`Message #`}
                            type="text"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            className="chat-field"
                        >

                        </textarea> */}
                        {/*
                        <button type='submit'>Submit</button> */}
                        <input
                            className="chat-field"
                            type="text"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />

                    </form>
                </div>
            </div>
        </>
    )
}

export default MessageComponent
