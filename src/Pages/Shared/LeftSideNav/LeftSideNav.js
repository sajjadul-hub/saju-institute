import {Image}from'react-bootstrap'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div>
            <div>
                {
                     categories.map(category =><Card key={category.id} category={category}></Card> )//<p key={category.id}>
                    //     {/* <Link className='ps-3 text-decoration-none fs-5' to={`/category/${category.id}`}>
                    //         {category.name}
                            
                    //     </Link>
                    //     <Image style={{width:"30px"}} src={category.img}></Image> */}
                    // </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;