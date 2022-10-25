import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaEye, FaStar } from 'react-icons/fa';
const News = () => {
    const news=useLoaderData();
    const {title,details, category_id,image_url,rating}=news;
    return (
        <Card style={{backgroundColor:"rgb(220 252 231)"}}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
         <div className='d-flex justify-content-between '>
         <div className='d-flex mb-2 '>
         <FaStar className='text-warning me-2 mt-1 '></FaStar>
 <small>{rating?.number}</small>
          </div>
          <p>Enroll lest date: {rating?.date}</p>
          <h6>Type: {rating?.badge}</h6>
         </div>
          
          <Card.Title>{title}</Card.Title>
          <h6>About this Course :</h6>
          <Card.Text>
        {details}
          </Card.Text>
          <div className='d-flex justify-content-between'>
          <Link to={`/category/${category_id}`}>
          <Button style={{backgroundColor:"#16a34a"}}>
            Back
          </Button>
          </Link>
          <Link> <Button style={{backgroundColor:"#16a34a"}}>
          Enroll Now
          </Button></Link>
          </div>
        </Card.Body>
      </Card>
    );
};

export default News;