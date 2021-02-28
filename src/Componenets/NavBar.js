import React from "react";
import {Link } from 'react-router-dom'
import {AiOutlineDashboard, AiOutlineDropbox} from 'react-icons/ai' 
import {BsGear} from 'react-icons/bs' 
import {HiOutlineUsers} from 'react-icons/hi' 
import {FiUsers} from 'react-icons/fi' 
import '../App.css'

function NavBar(){
    return(
        <>
           
            <nav>
        
        <ul className="nav-links" >
          <li className="nav-item">
            <Link className='nav-link'to = "">
              <span><AiOutlineDashboard className="menu-icon"/></span>
                Dash Board</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link'to = "">
            <AiOutlineDropbox className="menu-icon"/>Inventory</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link'to = "">
              <FiUsers className="menu-icon"/>Employees</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link'to = "">
              <HiOutlineUsers className="menu-icon"/>Custormers</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link'to = "/Settings">
              <BsGear className="menu-icon"/>Settings</Link>
          </li>
        </ul>
        
        

      </nav>
           
        </>
    )
}
export default NavBar;
