import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteConfirm from './DeleteConfirm';
import './DeleteConfirm.css';

function DeleteConfirmModal( {channelId} ) {
    const [showModal, setShowModal] = useState(false);

    return (
    <>
        <i className="fa-solid fa-trash-can" onClick={() => setShowModal(true)}></i>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <DeleteConfirm channelId={channelId} setShowModal={setShowModal}/>
        </Modal>
        )}
    </>
    );
}

export default DeleteConfirmModal;
