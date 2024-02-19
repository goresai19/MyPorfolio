import React from "react";
const NewCards=(props)=>{
    return(
        <>
        <div className="newheading">
            <h1>Projects</h1>
        </div>

         <div className="achievment">
         <div className="cards">
             <div className="card">
                 
                <img src={props.imgsrc} alt="img1" className="card_img"/> 
                <div className="card_info">
                <span className="class_category"> {props.title} </span>
                 <h5 className="card_title"> {props.sname} </h5>
                  {/* <a href={props.link}  target="_blank">
                 <button>Watch Now</button>
                 </a>  */}
                </div>
             </div>
          </div> 
         </div>
        
            </>
    );
}
export default NewCards;