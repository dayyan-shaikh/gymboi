import React from 'react';
import imgg1 from './images/img1.svg'; 
import imgg2 from './images/img2.svg'; 
import imgg3 from './images/img3.svg'; 

const Features = () => {
  return (
    <>
    <div className='image-grid '>
     <img src={imgg1} alt="img1" />
     <img src={imgg2} alt="img1" />
     <img src={imgg3} alt="img1" />
     </div>
    </>
  )
}

export default Features
