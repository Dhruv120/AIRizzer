import React from 'react'
import logo from '../assets/logo.png'
import HomeSection from './HomeSection'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="wrapper">
    <div className="sidebar">
      <div className="logo-details">
        <img src={logo} width='20%' alt="" />
        <span className="logo_name" style={{marginTop:20}}>AIrizzer</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to='/'>
            <i className='bx bx-home'></i>
            <span className="link_name">Home</span>
          </Link>
        </li>
        <li>
          <Link to='/summarizer'>
            <i className='bx bxs-file-doc'></i>
            <span className="link_name">Summarizer</span>
          </Link>
        </li>
        <li>
          <Link to='/chatbot'>
            <i className='bx bxs-bot'></i>
            <span className="link_name">Chatbot</span>
          </Link>
        </li>
        <li>
          <Link to='/chatgpt'>
            <i className='bx bxs-file-find'></i>
            <span className="link_name">ChatGPT</span>
          </Link>
        </li>
        
        <li>
          <div className="profile-details">
            <div className="profile-content">
              
            </div>
            <div className="name-job">
              <div className="profile_name">Dhruv Dholariya</div>
              <div className="job">Web Developer</div>
            </div>
            <i className='bx bx-log-out'></i>
          </div>
        </li>
      </ul>
    </div>
    <HomeSection/>
    </div>
  )
}

export default Navbar