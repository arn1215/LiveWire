import { useState } from "react"
import { useSelector } from "react-redux";

const MessageComponent = () => {
    
    
    
    const user = useSelector((state) => state.session.user);
    const channel = useSelector((state) => state.channel)
    const [content, setContent] = useState("")
    
    
    const onSubmit = (e) => {
        e.preventDefault()
        
        let message = {
            content,
            message_owner_id: user.id,
            channel
        }
        console.log(message)
    }
    return (
        <>
            <div className="chat">
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
