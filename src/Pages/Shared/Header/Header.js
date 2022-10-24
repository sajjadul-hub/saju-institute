import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaMoon, FaUser } from 'react-icons/fa';

const Header = () => {
  const {user,logOut}=useContext(AuthContext);
   const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
   }
  return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" style={{backgroundColor:"#4ade80"}} variant="">
        <Container>
          <Image roundedCircle className='me-3' style={{height:"40px"}} src="https://codingblog.online/static/images/logo.png"/>
          <Navbar.Brand><Link className='text-decoration-none fw-bolder fs-2 ' to='/'>Codeemy</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link className='text-decoration-none text-dark fw-bold fs-5'>All Course</Link></Nav.Link>
              <Nav.Link><Link className='text-decoration-none text-dark fw-bold fs-5' to='/blog'>Blog</Link></Nav.Link>
            </Nav>
            <Nav>
             {
              user?.photoURL?
              <Image className='mt-1' src={user?.photoURL} roundedCircle style={{height:'30px'}}></Image>
              :
              <FaUser className='mt-2 me-2 fs-5'></FaUser>
             }
              <Nav.Link>
               {
                user?.uid?
                <><span>{user?.displayName}</span>
                <button onClick={handleLogOut} className='ms-2 bg-primary text-light border-0 p-1 rounded'>Log Out</button>
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
              <Nav.Link eventKey={2}>
                <FaMoon className='mb-1 fs-5'></FaMoon>
              </Nav.Link>
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