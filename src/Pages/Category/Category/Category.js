import { useLoaderData } from "react-router-dom";
import NewsSummary from "../../Shared/NewsSummaryCard/NewsSummary";

const Category = () => {
    const categoryCourse=useLoaderData();
    return (
        <div>
            {
                categoryCourse.map(news=><NewsSummary key={news._id} news={news}></NewsSummary>)
            }
        </div>
    );
};

export default Category;