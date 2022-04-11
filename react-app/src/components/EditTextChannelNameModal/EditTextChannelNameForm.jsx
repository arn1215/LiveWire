import './EditFormTextChannelNameForm.css'
import React, { useState } from "react";
import * as channelActions from "../../store/channel";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom"

function EditForm({ setShowModal, channelId, currentChannelName }) {
    const {serverId} = useParams();
    const dispatch = useDispatch();
    let history = useHistory();
    const [channelName, setChannelName] = useState(currentChannelName);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updateChannelName = {
            channelName,
            channelId
        };
        let editedName;
        try {
            editedName = dispatch(channelActions.updateChannel(updateChannelName));
            dispatch(channelActions.loadAllChannels(serverId))
            setShowModal(false)
        } catch (error) {
        }
        if (editedName) {
            setErrors([]);
            history.push(`/servers/${serverId}`);
        }
    };


    const filteredErrors = errors.filter(error => error !== 'Invalid value')


    return (
    <div className="editFormContainer">
        <form className='editForm' onSubmit={handleSubmit}>
            <ul className={filteredErrors.length > 0 ? "errorList" : "hideErrorList"}>
            {filteredErrors.map((error, idx) => (
                <li key={idx}>{error}</li>
            ))}
            </ul>
                <label>
                Pick Your New Channel Name
                </label>
                <input
                    type="text"
                    value={channelName}
                    onChange={(e) => setChannelName(e.target.value)}
                    required
                />
                <button id='secondButtonCard' className="submitButton">Submit</button>
        </form>
    </div>
    );
}

export default EditForm;
