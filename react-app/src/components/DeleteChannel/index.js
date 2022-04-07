import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as channelActions from '../../store/channel'
import * as sessionActions from '../../store/session'

const DeleteChannel = () => {

  const dispatch = useDispatch();
  const channel = useSelector((state) => state.sesssion.channel);
  const user = useSelector((state) => state.session.user);
  const server = useSelector((state) => state.session.server)

  const [deleteOption, setDeleteOption] = useState(false);

  const destroyChannelButton = async (e) => {
    e.preventDefault();
    const payload = {
      id: channel.id
    }
    try {
      destroyedChannel = await dispatch(channelActions.removeChannel(payload));
    } catch (error) {
      (console.log('error in delete'))
    }
  }

  const showDeleteButtonCategory = () => {
    if (deleteOption === true) {
      return (
        <>
          <div>
            <button
              type='submit'
              onClick={destroyChannelButton}
              className='PLACEHOLDER'
            >
              Delete Category
            </button>
            <button
              type='submit'
              onClick={() => setDeleteOption(false)}
            >
              Cancel Delete
            </button>
          </div>
        </>
      );

    } else {
      return (
        <>
          <button
            onClick={() => setDeleteOption(true)}
          >
            Delete Category
          </button>
        </>
      )
    }
  }


  if (user.id === server.owner_id) {
    return (
      <>
        <div>
          {showDeleteButtonCategory()}
        </div>
      </>
    )
  }
}


export default DeleteChannel;
