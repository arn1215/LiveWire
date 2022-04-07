import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as channelActions from '../../store/channel'
import * as sessionActions from '../../store/session'

const CreateChannel = () => {

  const dispatch = useDispatch();
  // const sessionUser = useSelector((state) => state.session.user)
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
    <div className="cs">
    <h1 className="cs-title">Add A New Channel!</h1>
    <p className="cs-sub">
      Give your new channel a name to get started!
    </p>
    <form onSubmit={handleSubmit} className="cs-server-name-form">
      <label>
        CHANNEL NAME
      </label>
      <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      />
      <div className="cs-footer-buttons">
        <div className="cs-footer-left">
          <a href="/" className="cs-back-button">Home</a>
        </div>
        <div className="cs-submit-button">
          <button type='submit' className="cs-submit-button">Create Channel</button>
        </div>
      </div>
    </form>
  </div>

  )
}


export default CreateChannel;
