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



//     return (
//     <>
//         <button id='buttonCard' className='cs-button' onClick={() => setShowModal(true)}>+</button>
//         {showModal && (
//             <Modal onClose={() => setShowModal(false)}>
//                 <CreateServer />
//             </Modal>
//         )}
//     </>
//     );
// }

export default CreateChannelModal;
