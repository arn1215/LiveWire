import './EditFormTextChannelNameForm.css'
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditForm from './EditTextChannelNameForm';

function EditModal( { currentChannelName, channelId } ) {
    const [showModal, setShowModal] = useState(false);

    return (
    <>
        <i className="fa-regular fa-pen-to-square"  onClick={() => setShowModal(true)}></i>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <EditForm channelId={channelId} currentChannelName={currentChannelName} setShowModal={setShowModal}/>
        </Modal>
        )}
    </>
    );
}

export default EditModal;
