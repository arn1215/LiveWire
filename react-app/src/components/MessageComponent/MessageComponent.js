import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { createMessage } from "../../store/message";
import './Message.css'

const MessageComponent = () => {

    const dispatch = useDispatch()

    const user = useSelector((state) => state.session.user);
    // const messages = useSelector((state) => state.messages)
    const messages = [{content: "yo, dude "}, {content: "bruh"}, {content: "wagud "}]
    const channel = useSelector((state) => state.channel)
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
    return (
        <>
            <div className="chat">
            
               
              
                    <div className="message-wrap">
                        {messages.map(message => (
                            <div className="message">{message.content}</div>
                        ))}
                    </div>
                   
           
                
                

                <div className="message-card">
                    yo
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
