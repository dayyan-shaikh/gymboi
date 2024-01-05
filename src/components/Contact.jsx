import React from 'react';

const Contact = () => {
  return (
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
  )
}

export default Contact
