import React from 'react'
// import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

export const NavBar = () => {
    return (
        <div>
            <ul>

                {/* we do not used Link now beacuse it  is old a we used NavLink */}
                    {/* <Link to="/" as="li">Home</Link>
                    <Link to="/about" as="li">About</Link>
                    <Link to="/product" as="li">Product</Link> */}

                    <NavLink  exact activeClassName="active_class" to="/" as="li">Home</NavLink>
                    <NavLink exact activeClassName="active_class" to="/about" as="li">About</NavLink>
                    <NavLink exact activeClassName="active_class" to="/product" as="li">Product</NavLink>    
                  
            </ul>
        </div>
    )
}
