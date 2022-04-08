import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateServer from './CreateServer';
import "./CreateServer.css"

function CreateServerModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
          <button className='cs-button' onClick={() => setShowModal(true)}>+</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <CreateServer />
            </Modal>
          )}
        </>
      );
    }

export default CreateServerModal;
