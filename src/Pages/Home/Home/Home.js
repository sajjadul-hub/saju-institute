import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../../Shared/NewsSummaryCard/NewsSummary';

const Home = () => {
    const allNews=useLoaderData();
    return (
        <div>
            <h2 className='mb-5'>Introduction of all courses</h2> 
        {
allNews.map(news=><NewsSummary key={news._id}
news={news}
></NewsSummary>)
       }
        </div>
    );
};

export default Home;