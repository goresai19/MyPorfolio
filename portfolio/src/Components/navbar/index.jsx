import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import './styles.css';

const data = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'About',
        to: '/about'
    },
    {
        label: 'Achievements',
        to: '/achievements'
    },
    {
        label:'Projects',
        to:'/projects'
    },
    {
        label: 'Skills',
        to: '/skills'
    },
    {
        label: 'Contact',
        to: '/contact'
    },
   
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }

    return (
        <>
            <div>
              
                <nav className="navbar">
                    <div>
                        <nav className="navbar_container">
                            <Link to={"/"} className="navbar_container_logo">
                            <img src="https://img.icons8.com/?size=50&id=11779&format=png"  alt="leetcode" style={{ width: "30px", height: "auto" }} />
                            </Link>
                            <Link to={"https://twitter.com/PrasadS101"} className="navbar_container_logo">
                            <img src="https://img.icons8.com/?size=80&id=KxHlias9AgZt&format=png"  alt="leetcode" style={{ width: "30px", height: "auto" }} />
                            </Link>
                            <Link to={"https://www.linkedin.com/in/prasad-sonawane-2b5971212/"} className="navbar_container_logo">
                            <img src="https://img.icons8.com/?size=48&id=xuvGCOXi8Wyg&format=png"  alt="leetcode" style={{ width: "30px", height: "auto" }} />
                            </Link>
                            <Link to={"https://github.com/Prasad0535"} className="navbar_container_logo">
                            <img src="https://image.shutterstock.com/image-vector/cat-icon-flat-style-github-260nw-2298971193.jpg"  alt="leetcode" style={{ width: "20px", height: "auto" }} />
                            </Link>
                            <Link to={"https://leetcode.com/Prasad0535"} className="navbar_container_logo">
                                <img src="https://img.icons8.com/?size=80&id=9L16NypUzu38&format=png"  alt="leetcode" style={{ width: "20px", height: "auto" }} />
                            </Link>
                        </nav>
                    </div>
                    <ul className="navbar_container_menu">
                        {data.map((item, key) => (
                            <li key={key} className="navbar_container_menu_item">
                                <Link className="navbar_container_menu_item_link" to={item.to}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="nav_icon" onClick={handleToggleIcon}>
                        {toggleIcon ? <HiX /> : <FaBars />}
                    </div>
                   
                </nav>
            </div>
        </>
    );
}

export default Navbar;






















// import React from "react";
// import { useState } from "react";
// import {FaBars ,FaReact} from "react-icons/fa";
// import {HiX} from "react-icons/hi"
// import { Link } from "react-router-dom";
// import './styles.css'
// const data=[
//     {
//         label : 'Home',
//         to :'/'
//     },
//     {
//         label : 'About',
//         to :'/about'
//     },
//     {
//         label : 'Portfolio',
//         to :'/portfolio'
//     },
//     {
//         label : 'Skills',
//         to :'/skills'
//     },
//     {
//         label : 'Contact ',
//         to :'/contact'
//     },
// ];
// const Navbar=()=>{
//     const [toggleIcon,setToggleIcon]=useState(false)

//      const handleToggleIcon=()=>{
//         setToggleIcon(!toggleIcon)
//      }
//     return (
//         <>
//             <div>
//                 <nav className="navbar">
//                    <div>
//                    <nav className="navbar_container">
//                         <Link to={"/"} className="navbar_container_logo">
//                         <FaReact size={30}/>
//                         </Link>
//                         </nav>
//                    </div> 
//                     <ul className="navbar_container_menu">
//                         {
//                             data.map((item,key)=>{
//                                 <li key={key} className="navbar_container_menu_item">
//                                     <link className="navbar_container_menu_item_link" to={item.to}>{item.label}</link>
//                                 </li>
//                             }
//                             )}
//                     </ul>
//                     <div
//                     className="nav_icon"onClick={handleToggleIcon}>
//                         {
//                             toggleIcon ? <HiX /> : <FaBars />
//                         }
//                     </div>
//                 </nav>
//             </div>
//         </>
//     );
// }
// export default Navbar;