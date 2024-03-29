import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as serverActions from '../../store/server'

const CreateServer = ({onClose}) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  useSelector(state => state.server)
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newServer = {
      owner_id: sessionUser.id,
      name,
      icon,
      invite_URL: (Math.random(100, 10000)),
    };

    try {
      await dispatch(serverActions.createServer(newServer))
      await dispatch(serverActions.loadAllServers())
      await dispatch(serverActions.loadUsersServers(sessionUser.id))
      onClose();
      // history.push(`/servers/${serverId}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="cs">
      <h1 className="cs-title">Customize your server</h1>
      <p className="cs-sub">
        Give your new server a personality with a name
        and an icon. You can always change it later.
      </p>
      <form onSubmit={handleSubmit} className="cs-server-name-form">
        <label>
          SERVER NAME
        </label>
        <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        />
        <label>
          UPLOAD Server Icon
        </label>
        <input
        type="text"
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
        placeholder='URL'
        required
        />
        <div className="cs-footer-buttons">
          <div className="cs-footer-left">
            <a href="/login" className="cs-back-button">Back</a>
          </div>
          <div className="cs-submit-button">
            <button type='submit' className="cs-submit-button">Create Server</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateServer;
