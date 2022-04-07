import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";

import { createMessage, removeMessage, updateMessage } from "../../store/message";
import './Message.css'

const MessageComponent = () => {

    const dispatch = useDispatch()

    const user = useSelector((state) => state.session.user);
    // const messages = useSelector((state) => state.messages)
    const messages = [{id: 1, content: "yo, dude", message_owner_id:1}, {id: 2, content: "bruh", message_owner_id:1}, {id: 3, content: "wagud ", message_owner_id:2}]
    const channel = useSelector((state) => state.channel)
    const server = useSelector((state) => state.session.server)
    const [content, setContent] = useState("")


    const onSubmit = async (e) => {
        e.preventDefault()

        let message = {
            content,
            message_owner_id: user.id,
            channel_id: channel.id
        }
        setContent("")
        console.log(message)
        await dispatch(createMessage(message))

    }


    const onDelete = async (message) => {
      await dispatch(removeMessage(message.id))
    }

    return (
        <>
            <div className="chat">
            
               
              
                    <div className="message-wrap">
                        {messages.map(message => (
                            <>
                            <div key={message.id} className="message">{message?.content}</div>
                                {/* IF YOU OWN THE MESSAGE YOU CAN SEE EDIT AND DELETE BUTTONS */}
                                {user.id === message.message_owner_id &&  
                                <>
                                <button messageId={message.id} onClick={() => onDelete(message)}>delete</button>
                                <button>edit</button>
                                </>
                                }
                           
        
                            </>
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
