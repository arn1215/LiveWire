import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateChannel from './CreateChannel';
import "./CreateChannel.css"

function CreateChannelModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
          <button onClick={() => setShowModal(true)}>+</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <CreateChannel />
            </Modal>
          )}
        </>
      );
    }

export default CreateChannelModal;
