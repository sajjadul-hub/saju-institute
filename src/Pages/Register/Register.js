import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const hanleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value
    console.log(name, photoURl, email, password);

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        form.reset();
        handleUpdateUserProfile(name,photoURl);
      })
      .catch(error => {
        console.error(error)
        setError(error.message);
      })
  }

  const handleUpdateUserProfile = (name, photoURl) => {
    const profile = {
      displayName: name,
      photoURl: photoURl
    }
    updateUserProfile(profile)
      .then(()=>{

      })
      .catch(error=>console.error(error))
  }

  const handleAccepted = event => {
    setAccepted(event.target.checked);
  };
  return (
    <Form className='shadow-lg bg-light p-3 rounded w-75 ms-5' onSubmit={hanleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name='photoURL' type="text" placeholder="Photo URl" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={handleAccepted}
          label={<>Accept <Link to="/terms">Terms and Conditions</Link></>} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
      <Form.Text className="text-danger">
        {error}
      </Form.Text>
    </Form>
  );
};

export default Register;