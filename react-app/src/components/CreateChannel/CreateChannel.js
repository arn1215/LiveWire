import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as channelActions from '../../store/channel'

const CreateChannel = () => {
  const dispatch = useDispatch();
  const server = useSelector((state) => state.session.server)

  const [name, setName] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newChannel = {
      name,
      server_id: server.id
    }

    let createdChannel;

    try {
      createdChannel = await dispatch(channelActions.createChannel(newChannel))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="cc">
    <h1 className="cc-title">Add A New Channel!</h1>
    <p className="cc-sub">
      Give your new channel a name to get started!
    </p>
    <form onSubmit={handleSubmit} className="cc-server-name-form">
      <label>
        CHANNEL NAME
      </label>
      <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      />
      <div className="cc-footer-buttons">
        <div className="cc-footer-left">
          <a href="/" className="cc-back-button">Home</a>
        </div>
        <div className="cc-submit-button">
          <button type='submit' className="cc-submit-button">Create Channel</button>
        </div>
      </div>
    </form>
  </div>

  )
}


export default CreateChannel;
