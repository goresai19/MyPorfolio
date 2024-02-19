import React from "react";
import './styles.css'
const About=()=>{
  const resumeLink='https://drive.google.com/file/d/1NNS9NIKpLjuqHYlAtSiSztkWISSi7fPT/view';

  const handleResumeClick=()=>{
    window.location.href=resumeLink;
  }
     return(
        

   <>
    <h1 className="heading"><span>About</span>me</h1>
    <div className="about">

      <div className="info">

     
      <h3><span>Name :</span>Prasad Subhash Sonawane</h3>
          <h3><span>Age  :</span>20 Years</h3>
          <h3><span>Qualification :</span>Engineering</h3>
          <h3><span>Branch :</span>Computer Science And Engineering</h3>
          <h3><span>College:</span>Deogiri Institute of Engineering And Mangement Studies</h3>
          <h3><span>Current Status :</span>Java Developer Intern</h3>
          </div>
      <div className="para">
        <article>
        Greetings ! I possess a robust skill set in front-end development, proficiently working with HTML, CSS, and JavaScript to craft responsive and visually appealing web applications. Alongside my expertise in front-end technologies, 
        I excel in competitive programming, particularly in Java, JavaScript, and Python. My dedication to mastering algorithmic problem-solving and data structures has enabled me to tackle complex challenges with efficiency and creativity.
        Furthermore, I have maintained a commendable academic record, boasting a CGPA of 7.84, reflecting my commitment to academic excellence and continuous learning. With a solid foundation in both technical skills and academic achievements,
        I am equipped to thrive in dynamic and challenging environments within the realm of technology. 
        </article>   
      </div>
      </div>
   <div className="counter">
      <div class="box">
            <span>1 +</span>
            <h3>Month of  Experience </h3>
        </div>
      <div className="box">
            <span>5 +</span>
            <h3>Projects</h3>
          </div>
<div className="box">
            <span>10 +</span>
            <h3>Contest Experience</h3>
          </div>

          <div className="box">
            <span>3 +</span>
            <h3>Technology Learn</h3>
          </div>

          <div> <button onClick={handleResumeClick} className="resume-button">
           Downlaod Resume
        </button>
   </div>
   </div>  
     
  
   </>
);
}
export default About;


  