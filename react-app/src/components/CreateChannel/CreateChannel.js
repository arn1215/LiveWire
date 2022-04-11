import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import * as channelActions from '../../store/channel'

const CreateChannel = () => {
  const dispatch = useDispatch();
  const {serverId} = useParams()

  const [name, setName] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newChannel = {
      name,
      serverId
    }


    try {
    await dispatch(channelActions.createChannel(newChannel))
    await dispatch(channelActions.loadAllChannels(serverId))
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
        <button type='submit' className="cc-submit-button">Create Channel</button>
        <a href={`/servers/${serverId}`} className="cc-back-button">Back</a>
      </div>
    </form>
  </div>

  )
}


export default CreateChannel;
