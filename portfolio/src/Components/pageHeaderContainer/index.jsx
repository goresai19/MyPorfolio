import React from "react";
import './styles.css';
import { useState } from "react";
import { useEffect } from "react";

const PageHeader = ({ title }) => {
    const [info, setInfo] = useState('Front End Developer');

    useEffect(() => {
      const timeout1 = setTimeout(() => {
        setInfo('Designer');
      }, 2000);
  
      const timeout2 = setTimeout(() => {
        setInfo('Freelancer   ');
      }, 4000);
  
      const timeout3 = setTimeout(() => {
        setInfo('Programmer');
      }, 6000);
  
      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
      };
    }, []);
    
    return (
        <>
    <div className="Name">
          Hey, I am Prasad Sonawane !!!!
         </div>
         <span style={{ color: 'black' }}>{info} </span>
        </>
        
    );
}

export default PageHeader;
