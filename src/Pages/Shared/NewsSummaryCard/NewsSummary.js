import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import {FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import News from '../../News/News/News';
const NewsSummary = ({ news }) => {
    const { _id, title, image_url, author, details,rating, total_view } = news;
    return (
        <Card className="border-0 mb-5">
            <Card.Header style={{backgroundColor:"rgb(187 247 208)"}} className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                    className='me-2'
                    roundedCircle
                        src={author?.img}
                        style={{ height: '60px',marginTop:"10px" }}></Image>
               <div className='mt-3'>
                <h6 className='mb-0'>Course Instructor :-</h6>
                <p className='mb-0'>{author?.name}</p>
               </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body style={{backgroundColor:"rgb(220 252 231)"}}>
                <Card.Title className='mb-3 fs-5 text-center'>{title}</Card.Title>
                <Card.Img className='rounded-2' variant="top" src={image_url} />
                <Card.Text className='mt-3'>
                    {details.length > 200 ?
                        <p>{details.slice(0, 200) + '...'}<Link to={`/news/${_id}`}><button style={{backgroundColor:"rgb(34 197 94)"}} className='border-0 py-2 rounded-1'>Apply Now</button></Link></p>
                        : <p>{details}</p>}
                </Card.Text>
            </Card.Body>
            <Card.Footer style={{backgroundColor:"rgb(187 247 208)"}} className="d-flex justify-content-between align-items-center ">
                <div>
                <FaStar className='text-warning me-2'></FaStar>
                <span>{rating?.number}</span>
                </div>
                <div>
                    <span>
                        {total_view}
                    </span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummary;