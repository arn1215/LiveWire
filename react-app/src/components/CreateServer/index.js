import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateServer from './CreateServer';
import "./CreateServer.css"

function CreateServerModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
          <button onClick={() => setShowModal(true)}>+</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <CreateServer />
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

export default CreateServerModal;
