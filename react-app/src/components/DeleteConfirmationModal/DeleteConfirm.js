import React from "react";
import * as channelActions from "../../store/channel";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import './DeleteConfirm.css';

function DeleteConfirm( { setShowModal, channelId } ) {
    const {serverId} = useParams();
    const dispatch = useDispatch();
    const history = useHistory()

    const handleCLick = async (e) => {
    e.preventDefault();
    await dispatch(channelActions.removeChannel(channelId));
    setShowModal(false);
    }

    return (
    <div className="formContainer">
        <div className='deleteConfirm'>
            <h1>Are you sure you want to delete?</h1>
            <div className="deleteButtonContainer">
                <button className="submitButton" onClick={handleCLick} type="submit">Submit</button>
                <button className="cancelButton" type='button' onClick={ () => setShowModal(false) }>
                    Cancel
                </button>
            </div>
        </div>
    </div>
    );
}

export default DeleteConfirm;
