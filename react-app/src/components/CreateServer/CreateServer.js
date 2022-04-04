import React, { useState } from 'react'

function CreateServer() {
  const [serverName, setServerName] = useState("");

  return (
    <div className="cs">
      <h1 className="cs-title">Customize your server</h1>
      <p className="cs-sub">
        Give your new server a personality with a name
        and an icon. You can always change it later.
      </p>
      <a href="/login" className="img cs-upload-icon">UPLOAD img icon</a>
      <form className="cs-server-name-form">
        <label>
          SERVER NAME
        </label>
        <input
        type="text"
        value={serverName}
        onChange={(e) => setServerName(e.target.value)}
        required
        />
      </form>
      <div className="cs-footer-buttons">
        <div className="cs-footer-left">
          <a href="/login" className="cs-back-button">Back</a>
        </div>
        <div className="cs-submit-button">
          <button type='submit' className="cs-submit-button">Create Server</button>
        </div>
      </div>
    </div>
  )
}

export default CreateServer;
