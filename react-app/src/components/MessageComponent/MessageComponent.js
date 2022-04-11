import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import * as messageActions from "../../store/message";
import './Message.css'

const MessageComponent = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.session.user);
    const messagesObj = useSelector((state) => state.messages);
    const messagesArr = Object.values(messagesObj);
    const channel = useSelector((state) => state.channel.currentChannel);
    const [content, setContent] = useState("");
    const [editedMessageId, setEditedMessageId] = useState(null);
    const [editedMessage, setEditedMessage] = useState('');
    const [deletedMessage, setDeletedMessage] = useState('');

    const onSubmit = () => {

        let message = {
            channel_id: 1,
            message_owner_id: user.id,
            content: content
        }
        setContent("")
        dispatch(messageActions.createMessage(message))
    }

    const onSubmitEdit = (messageId) => {
        let updatedMessage = {
            message_id: messageId,
            content: editedMessage
        }
        setEditedMessageId(null)
        dispatch(messageActions.updateMessage(updatedMessage))
    }

    const onDelete = (message) => {
        setDeletedMessage(message.content)
        dispatch(messageActions.removeMessage({ message_id: message.id, channel_id: 1 }))
    }

    const onEdit = (messageId, messageContent) => {
        setEditedMessage(messageContent)
        setEditedMessageId(messageId)
    }

    const handleOnChange = (e) => {
        setEditedMessage(e.target.value)
    }

    useEffect(() => {
        dispatch(messageActions.fetchMessages(1))
    }, [dispatch, deletedMessage])

    return (
        <>
            <div className="chat">
                <div className="message-wrap">
                    {messagesArr?.map(message => (
                        <div>
                            {editedMessageId !== message.id && (
                                <>
                                    <div key={message.id} className="message">{message?.content}</div>
                                    {user.id === message.message_owner_id && (
                                        <div>
                                            <button messageId={message.id} onClick={() => onDelete(message) }>delete</button>
                                            <button onClick={() => {onEdit(message.id, message.content)}}>edit</button>
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
