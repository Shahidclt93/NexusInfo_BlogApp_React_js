import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(
    window.innerWidth > 800 ? true : false
  );
  const closeNavHandler = ()=>{
    if(window.innerWidth < 800){
      setIsNavShowing(false)
    } 
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setIsNavShowing(true);
      } else {
        setIsNavShowing(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
          <img src={Logo} alt="Navbar Logo" onClick={closeNavHandler}/>
        </Link>
        {isNavShowing && 
        
        <ul className="nav__menu">
          <li>
            <Link to="/create" onClick={closeNavHandler}>Create Post</Link>
          </li>
          <li>
            <Link to="/myposts/edresag" onClick={closeNavHandler}>My Posts</Link>
          </li>
          <li>
            <Link to="/authors" onClick={closeNavHandler}>Authors</Link>
          </li>
          <li>
            <Link to="/profile/edresag" onClick={closeNavHandler}>Profile</Link>
          </li>
          <li>
            <Link to="/register" onClick={closeNavHandler}> Logout</Link>
          </li>
        </ul>
        }
        <button className="nav__toggle_btn" onClick={()=>setIsNavShowing(!isNavShowing)}>
         {isNavShowing ? <AiOutlineClose /> : <FaBars/>} 
        </button>
      </div>
    </nav>
  );
};

export default Header;
