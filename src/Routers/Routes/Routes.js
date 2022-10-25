import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import News from "../../Pages/News/News/News";
import TermsAndConditions from "../../Pages/Others/TermsAndContitions/TermsAndConditions";
import Register from "../../Pages/Register/Register";
import Blog from "../../Pages/Shared/Blog/Blog";
import Cover from "../../Pages/Shared/Cover/Cover";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <PrivateRoute><Home></Home></PrivateRoute>,
                 loader:()=>fetch('http://localhost:5000/news')
            },
            
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/news/:id',
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/terms',
                element:<TermsAndConditions></TermsAndConditions>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/cover',
                element:<Cover></Cover>
            }
        ]
    }
]);