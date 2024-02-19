import React from "react";
import Cards from "./Cards";
import '../achievements/styles.css'
const Achievements = () => {
  return (
    <>
    <h2>Certificates</h2>
    
      <div className="certificates">
         <div className="card_container">
         <Cards 
    imgsrc="/images/certificate1.png"
    title = "This is attendee Certicate "
    sname="AMAZON"
    link="https://portfolioprasad1.netlify.app/" 
   />
    <Cards 
    imgsrc="/images/infosys.png"
    title = " AWS INNOVATIVE  "
    sname="AMAZON"
    link="https://portfolioprasad1.netlify.app/" 
   />
    <Cards 
    imgsrc="/images/Tcs.png"
    title = " AWS INNOVATIVE  "
    sname="AMAZON"
    link="https://portfolioprasad1.netlify.app/" 
   />
         </div>
   </div>
   <h2>Projects</h2>
   <div className="Projects">
   <Cards 
    imgsrc="/images/Tcs.png"
    title = " AWS INNOVATIVE  "
    sname="AMAZON"
    link="https://portfolioprasad1.netlify.app/" 
   />
    <Cards 
    imgsrc="/images/Tcs.png"
    title = " AWS INNOVATIVE  "
    sname="AMAZON"
    link="https://portfolioprasad1.netlify.app/" 
   />
   </div>
   <h2>Events </h2>
   <div className="Events">
   <Cards 
    imgsrc="/images/Tcs.png"
    title = " AWS INNOVATIVE  "
    sname="AMAZON"
    link="https://portfolioprasad1.netlify.app/" 
   />
   </div>
      </>
    
  );
};


export default Achievements;


{/* <div className="events">
        <h1>Events</h1>
        <div className="card-container">
      <Cards 
    imgsrc="/images/certificate2.png"
    title = " AWS INNOVATIVE  "
    sname="AMAZON"
    link="https://portfolioprasad1.netlify.app/" 
      />
        <Cards
    imgsrc="/images/certificate2.png"
    title = " AWS INNOVATIVE  "
    sname="AMAZON"
    link="https://portfolioprasad1.netlify.app/" 
      />
    </div>
    {/* </div> */} 