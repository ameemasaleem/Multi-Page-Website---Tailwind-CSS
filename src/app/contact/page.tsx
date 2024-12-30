import React from 'react'

const Contact = () => {
  return (
    // <div>
    //   <section classNameName='contact form'>
    //     <h2 classNameName='fade-in'>Contact Us</h2>
    //     <div classNameName='main'><input type="text" placeholder="Full Name" required/>
    //     <input type="email" placeholder="Email Address" required/>
    //     <input type="text" placeholder="Phone Number" />
    //     <textarea placeholder='Your Message' rows={5} required></textarea>
    //     <button type="submit">Send Message</button>
    //     </div>

    //   </section>
    // </div>

    <div className="contact-form-container">
    <h1 className="contact-form-title">Contact us</h1>
    <form className="contact-form">
        <input type="text" placeholder="Name" className="contact-input" />
        <input type="email" placeholder="Email" className="contact-input" />
        <input type="text" placeholder="Subject" className="contact-input" />
        <textarea placeholder="Message"  className="contact-textarea"></textarea>
        <button type="button" className="contact-button">Send</button>
    </form>
</div>

  )
}

export default Contact