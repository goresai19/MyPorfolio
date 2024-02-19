import React from "react";
const Cards=(props)=>{
    return(
        <>
           
       
         {/* <div className="achievment"> */}
        <div className="cards">
        <div className="card">
                <img src={props.imgsrc} alt="img1" className="card_img"/> 
                <div className="card_info">
                <h5 className="card_title"> {props.sname} </h5>
                <span className="class_category"> {props.title} </span>
               
                  <a href={props.link}  target="_blank">
                 <button>Watch Now</button>
                 </a> 
                </div>
             </div>
        </div>
            
          
         {/* <div className="cards">
           
          </div>  */}

        

            </>
    );
}
export default Cards;

