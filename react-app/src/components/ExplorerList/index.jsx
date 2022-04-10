import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import './ExplorerList.css'

const ExplorerList = () => {
  const allServers = useSelector(state => state.server.allServers)
  console.log("allServers-------------------------------->", allServers)


  return (
    <div>
      {/* <div>
          {allServers.map(server => {
            <div key={server.id}>
              {server.icon}
            </div>
          })}
      </div> */}
    </div>
  )
}

export default ExplorerList;
