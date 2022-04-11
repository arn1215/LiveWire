import React, {useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { loadAllServers } from '../../store/server';
import './ExplorerList.css'

const ExplorerList = () => {
  const dispatch = useDispatch();
  const allServers = useSelector(state => (state.server.allServers))
  const serversArray = Object.values(allServers)

  return (
    <div className='explorer-div'>
      EXPLORER
      <div>
          {serversArray.map(server => {
            <div key={server.id}>
              <div> {server?.icon} </div>
            </div>
          })}
      </div>
    </div>
  )
}

export default ExplorerList;
