import React, { useEffect } from 'react'
// import ScrollReveal from 'scrollreveal'
// import bannerimg from "../../Assets/10.png"
import "./Banner.css"

const Banner = () => {

//   useEffect(() => {
//     const sr = ScrollReveal({
//         origin: 'top',
//         distance: '80px',
//         duration: 2000,
//         reset: true,
//     });

//     sr.reveal('.banner-heading', {})

//     return () => sr.destroy();
// }, []);

  return (
    <>
      <div className="banner">
        <div className="banner-heading">
          <h1 >Refrigerator Repair Near Me</h1>
        </div>
        <img src="https://alphaappliance.ca/wp-content/uploads/2023/04/Commercial-Refrigerator-repair-Promo-Img-scaled.jpg" alt="" />
      </div>
    </>
  )
}

export default Banner
