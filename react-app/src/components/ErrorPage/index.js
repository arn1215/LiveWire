import React from 'react';
import { NavLink } from 'react-router-dom';
import './ErrorPage.css'

function ErrorPage() {
    return (
    <div className='ErrorPage'>
        <h1>PAGE NOT FOUND!</h1>
        <NavLink className="returnHome" exact to="/">Return Home</NavLink>
    </div>
    )
}

export default ErrorPage
