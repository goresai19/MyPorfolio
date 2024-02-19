import React from "react";
import './styles.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="left">
                Let's Come TO Me
            </div>

            <div className="contact-form">
                <h1>Contact Us</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;






















// import React from "react";
// import './styles.css'

// const Contact=()=>{
//     return(
//     <>
//      <div class="left">
//       Let's Comes TO Me
    //  </div>
    //  {/* <div className="image_container">
    //  Thank You !!!!!!!
      // {/* <img src='/images/certificate2.png' alt="new" className="card_img"></img> */}
    


//     <div class="contact-form">
//        <h1>Contact Us</h1>
//   <form>
//     <div class="form-group">
//       <label for="name">Your Name:</label>
//       <input type="text" id="name" name="name" placeholder="Enter your name" required />
//     </div>
//     <div class="form-group">
//       <label for="email">Your Email:</label>
//       <input type="email" id="email" name="email" placeholder="Enter your email" required />
//     </div>
//     <div class="form-group">
//       <label for="message">Message:</label>
//       <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
//     </div>
//     <button type="submit">Send Message</button>
    
//   </form>

// </div>


   
    
 
//     </>
//        );
// }
// export default Contact;
