import React from 'react'
import {FaUsers} from 'react-icons/fa'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="sidebar">
                <div className="profile">
                    <FaUsers className='profiledp'/>
                    <h3>Employee Management</h3>
                </div>
                <div className="navbody">
                <ul>
                  
                    <li>
                        <Link to="/">
                         
                            My Dashboard
                        </Link>
                    </li>
                   
                   
                </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar