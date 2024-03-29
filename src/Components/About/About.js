import React, { useEffect } from 'react'
import "./About.css"
import ScrollReveal from 'scrollreveal'
// import AboutKey2 from "../../Assets/about2.jpg"

const About = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    sr.reveal('.about-main', {})

    return () => sr.destroy();
  }, []);



  return (
    <>
      <div className="aboutUs">
        <div className="about-main">
          <div className="about-left">
            <div className="about-title">
              <h2>Refrigerator Repair Near Me</h2>
            </div>
            <div className="about-detail">
              <p>Welcome to Refrigerator Repair Near Me, your trusted partner for all your key-related needs! Whether you find yourself locked out of your home, office, or vehicle, our skilled and efficient key makers are ready to come to your rescue.</p>
              <p> With a commitment to prompt and reliable service, we understand the urgency of key emergencies and strive to provide quick solutions at your convenience.</p>
            </div>
          </div>
          <div className="about-right">
            {/* <img className="image1" src={AboutKey1} alt="" /> */}
            <img className="image2" src="https://static.homeguide.com/assets/images/content/homeguide-repair-technician-fixing-a-refrigerator-and-freezer.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
