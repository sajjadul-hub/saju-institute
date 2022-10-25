import { useLoaderData } from "react-router-dom";
import NewsSummary from "../../Shared/NewsSummaryCard/NewsSummary";

const Category = () => {
    const categoryCourse=useLoaderData();
    return (
        <div>
            {
                categoryCourse.map(course=><NewsSummary key={course._id} course={course}></NewsSummary>)
            }
        </div>
    );
};

export default Category;