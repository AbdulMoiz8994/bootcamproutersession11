import React from 'react'
import {Link} from 'react-router-dom'

export const Error = () => {
    return (
        <div>
            <h1>OOps! Page Not Found!</h1>
            <Link to="/">Go Home Page</Link>
        </div>
    )
}
