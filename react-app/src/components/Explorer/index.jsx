import React from 'react'
import {Link} from 'react-router-dom'
import ExplorerList from '../ExplorerList'
import './ExplorerCSS.css'

const Explorer = () => {
  return (
    <div className='explorer-button'>
      <Link to='/explorer' className='explorer-list'>
        <button className='cs-button'><ExplorerList /></button>
      </Link>
    </div>
  )
}


export default Explorer;
