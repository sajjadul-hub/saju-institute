import React from 'react';
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const Card = ({ category }) => {
    return (
        <div className='rounded-2 mb-3 py-3 px-2 shadow-lg' style={{ backgroundColor: "rgb(74 222 128)" }}>
             <Image className='rounded-1 mt-1' style={{ width: "150px", height: "100px" }} src={category.img}></Image>
            <div className=' text-center  mt-3'>
                <Link className=' rounded-1  bg-light px-4 py-1 text-decoration-none fs-5' to={`/category/${category.id}`}>
                    {category.name}
                </Link>
            </div>
           
        </div>
    );
};

export default Card;