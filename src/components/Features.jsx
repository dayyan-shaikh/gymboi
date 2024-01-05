import React from 'react';
import imgg1 from './images/img1.svg'; 
import imgg2 from './images/img2.svg'; 
import imgg3 from './images/img3.svg'; 

const Features = () => {
  return (
    <>
    <div className='container image-grid'>
    <div>
     <img src={imgg1} alt="img1" />
     <h3>Weightlifting</h3>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
    </div>
    <div>
     <img src={imgg2} alt="img2" />
     <h3>SpecificMuscle</h3>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p> 
    </div>
    <div>
    <img src={imgg3} alt="img3" />
     <h3>CardioMuscle</h3>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
    </div>
    </div>
    </>
  )
}

export default Features
