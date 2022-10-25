import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitch, FaTwitter } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSidNav = () => {
const {providerLogin}=useContext(AuthContext);
const googleProvider=new GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(error=>console.error(error))
    };
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>  Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with GitHub</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5 className='mb-2'>Find us on :-</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><h5>Upcoming course list</h5>
                    <p style={{color:"rgb(6 182 212)"}}><b>1. Data</b> </p>
                    <p style={{color:"rgb(220 38 38)"}}><b>2. C#</b></p>
                    <p style={{color:" rgb(249 115 22)"}}><b>3. Data science</b></p>
                    <p style={{color:"rgb(202 138 4)"}}><b>4. Kotlin</b></p>
                    <p style={{color:"rgb(101 163 13)"}}><b>5. App development</b></p>
                    
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightSidNav;