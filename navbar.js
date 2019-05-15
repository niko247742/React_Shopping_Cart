import React from 'react';



///Cannot use lifecycle hooks on funcitonal conponents, no state to update
const NavBar = ( {countersTotal}) => {
    //console.log('Navbar - rendered')
    return (
        <nav className="navbar navbar-dark bg-dark p-2">

            <span className="navbar-brand mb-0 h1">Shopping Cart</span>
            <span 
                className="navbar-brand mb-0 h1">Number of non-zero items 
                <span className = "badge badge-secondary badge-pill m-2">{countersTotal}</span>
            </span>
        </nav>        
            )
}

export default NavBar;