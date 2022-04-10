import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ExplorerList.css'

const ExplorerList = () => {
  const allServers = useSelector(state => Object.values(state.server.servers.servers))


  return (
    <div>
      <div>
          {allServers.map(server => {
            <div key={server.id}>
              {server.icon}
            </div>
          })}
      </div>
    </div>
  )
}
