import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateChannel from './CreateChannel';
import "./CreateChannel.css"

function CreateChannelModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
          <div className='cc-wrapper'>
            <p className='cc-text'>Create Text Channel</p>
            <button className='cc-button' onClick={() => setShowModal(true)}>+</button>
          </div>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <CreateChannel />
            </Modal>
          )}
        </>
      );
    }

export default CreateChannelModal;
