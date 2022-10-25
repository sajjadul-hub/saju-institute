import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Cover = () => {
  return (
    <div>
      <h3 className='fs-1 text-center my-5 '>How I Would Learn To Code If I Could Start Over!</h3>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://i0.wp.com/speros.com/wp-content/uploads/2021/03/5-reasons-to-have-a-professional-design-and-create-your-business-website.jpg?fit=1920%2C1080&ssl=1"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://i0.wp.com/www.techbooky.com/wp-content/uploads/2020/11/frontend_webdeveloper.jpg?fit=1920%2C1080&ssl=1"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className='mt-5'>
        <div className='mb-3'>
          <h3>Gain proficiency with The Basics -</h3>
          <p>It is vital to Have great essentials. Assuming you're a firebrand like me once you gain proficiency with the very rudiments you'll bounce on to the further developed points. In any case, you ought to improve your abilities. First and foremost pick a( or surprisingly better 2, yet don't accomplish more than 2) language( I'd begin with C++ and after I would learn Python), become familiar with the essential standards and sentence structure, and begin making novice projects( I have a blog about this, read it here). Subsequent to making those undertakings continue on toward calculations and information structures( for this you could understand books or even watch courses on the web).</p>
        </div>
        <div className='mb-3'>
          <h3>Git and GitHub -</h3>
          <p>This perhaps probably won't code itself, however, you should have a GitHub record and know what it is. You really must form your GitHub account as it very well may be valuable later on!</p>
        </div>
        <div>
          <h3>Begin Learning Modules -</h3>
          <p>Once you've taken in the language currently you're prepared to begin realizing what you need to be. So to be a web dev, begin learning web dev in your language. Begin again by learning the standards and making projects. Begin with fundamental undertakings, and continue on toward the further developed ones.</p>
        </div>
        <div className='mb-3'>
          <h3>Construct Your Portfolio -</h3>
          <p>Once you've assembled progressed projects in your field, this is the ideal opportunity to begin making your portfolio. Search on google what projects( connected with your field) you ought to put on your portfolio. Assemble those, and your portfolio is finished. After that I think the main thing left to say is that:</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;