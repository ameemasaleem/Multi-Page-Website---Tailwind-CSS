import React from 'react'

import "../globals.css"

const About = () => {
  return (
    <div>
        <section className='about' style={{backgroundImage: "url(About2.jpg)"}}>
            <div className='about-content'>
                <h2 className='fade-in '>
                    About Us</h2>
                    <p className="paragraphs">Welcome to Dress World, where we believe a watch is more than just an accessory it is a statement of style, precision, craftsmanship. Our mission is to bring you a diverse selection of premium timepieces from around the globe, each chosen for its quality and unique design. Whether you are a connoisseur or simply appreciate the beauty of a well-made watch, we are here to help you find the perfect piece to complement your personality and elevate your look.</p>
            </div>
        </section>
    </div>
  )
}

export default About