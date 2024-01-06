import React from 'react';

const Contact = () => {
  return (
    <footer>
      <div className='contact'>
          <form action="#" method="post">
              <h3>Contact Us</h3>
              <input type="text" id='name' placeholder='Name' />
              <input type="text" id='email' placeholder='Email' />
              <input type="text" id='Phone' placeholder='Phone No'/>
              <textarea name="" id="message" rows="4" placeholder='Your Meassage'></textarea>
              <button type='submit'>Submit</button>            
          </form>
      </div>
      <div className='footer grid'>
        <div className='location'>
        Location <br /> <a href="#"><i className=" fa-2x fa-solid fa-location-dot"></i></a>
        <p>Krushna marriage hall, <br /> nalimbi road, <br /> Ambarnath(W)</p>
        </div>
        <div className='phone'>
        Phone <br /> <a href="#"><i className="fa-2x fa-solid fa-phone"></i></a>
        <p>+91 9730004278</p>
        <p>+91 9730004278</p>
        </div>
        <div className='social'>
        Social Media <br />
        <a href="https://www.instagram.com/dayyan__shk/"><i className="fa-2x fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100006539163202"><i className="fa-2x fa-brands fa-facebook"></i></a>
        <a href="https://www.linkedin.com/in/dayyan-shaikh/"><i className="fa-2x fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Contact
