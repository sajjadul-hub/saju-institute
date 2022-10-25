import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaUser } from 'react-icons/fa';
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import Switch from "react-switch";
export const ThemeContext = createContext(null);
const Header = () => {
  const {user,logOut}=useContext(AuthContext);
   const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
   }
   const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" style={{backgroundColor:"#4ade80"}} variant="">
        <Container>
          <Image roundedCircle className='me-3' style={{height:"40px"}} src="https://codingblog.online/static/images/logo.png"/>
          <Navbar.Brand><Link className='text-decoration-none fw-bolder fs-2 ' to='/cover'>Codeemy</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link to='/' className='text-decoration-none text-dark fw-bold fs-5'>All Course</Link></Nav.Link>
              <Nav.Link><Link className='text-decoration-none text-dark fw-bold fs-5' to='/blog'>Blog</Link></Nav.Link>
            </Nav>
            <Nav>
             {
              user?.photoURL?
              <Image className='mt-3' src={user?.photoURL} roundedCircle style={{height:'30px'}}></Image>
              :
              <FaUser className='mt-2 me-2 fs-5'></FaUser>
             }
              <Nav.Link>
               {
                user?.uid?
                <><span>{user?.displayName}</span>
                <button onClick={handleLogOut} style={{backgroundColor:"#16a34a"}} className='mx-3 px-2 py-2 rounded text-light text-decoration-none border-0'>Log Out</button>
                </>
                :
                <>
                <Link style={{backgroundColor:"#16a34a"}} className='me-3 px-3 py-2 rounded text-light text-decoration-none' to='/login'>
                  Login
                </Link>
                <Link  style={{backgroundColor:"#16a34a"}} className=' p-2 rounded text-light text-decoration-none' to='/register'>     Register 
                </Link>
                </>
               }
              
              </Nav.Link>
              <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className="switch">
          <label className='me-3 mt-3s'> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
            </Nav>
            <div className='d-lg-none'>
                <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;