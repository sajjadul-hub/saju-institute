import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='px-3 py-2 mb-2 rounded-1' style={{backgroundColor:"rgb(52 211 153)"}}>
                <h4>1.What is cors?</h4>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources</p>
            </div>
            <div className='px-3 py-2  mb-2  rounded-1' style={{backgroundColor:"rgb(52 211 153)"}}>
                <h4>
                    2.Why are you using firebase? What other options do you have to implement authentication?
                </h4>
                <p>
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                </p>
            </div>
            <div className='px-3 py-2  mb-2  rounded-1' style={{backgroundColor:"rgb(52 211 153)"}} >
                <h4>
                    3.How does the private route work?
                </h4>
                <p>
                    The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                </p>
            </div>
            <div className='px-3 py-2  mb-2  rounded-1' style={{backgroundColor:"rgb(52 211 153)"}} >
                <h4>
                    4.What is Node? How does Node work?
                </h4>
                <p>
                    Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return
                </p>
            </div>
        </div>
    );
};

export default Blog;