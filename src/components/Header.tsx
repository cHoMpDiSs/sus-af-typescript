import React from "react";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () =>{
      
        const [navbarOpen, setNavbarOpen] = React.useState(false);
        return (
          <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3">
              <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white  font-bold hover:opacity-75" to="/"><p className="nav-text">sus af skateboards</p></Link>
                  <button
                    className="text-white cursor-pointer text-xl leading-none px-1 py-.5 border border-solid border-transparent rounded bg-transparent bg-black block lg:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >                 <div className="space-y-2 ">
                  <div className="w-6 h-0.5 bg-white "></div>
                  <div className="w-6 h-0.5 bg-white"></div>
                  <div className="w-6 h-0.5 bg-white"></div>
                </div>
                  </button>
                </div>
                <div
                  className={
                    "lg:flex flex-grow items-center " +
                    (navbarOpen ? " flex " : " hidden")
                  }
                  id="example-navbar-danger"
                >
                  <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
                    <li className="nav-item">
                      <Link className={"px- py-2 flex items-center  font-bold leading-snug text-white hover:opacity-75 " + (navbarOpen? " ": "px-2")} to="/skateboards"><p className="nav-text">skateboards</p></Link>
                                   
                    </li>
                    <li className="nav-item ">
                     <Link className={"px- py-2 flex items-center  font-bold leading-snug text-white hover:opacity-75 " + (navbarOpen? " ": "px-2")}  to="/shirts"><p className="nav-text">shirts</p></Link>
            
                    </li>
                    <li className="nav-item">
                     <Link className={"px- py-2 flex items-center  font-bold leading-snug text-white hover:opacity-75 " + (navbarOpen? " ": "px-2")}  to="/pants"><p className="nav-text">pants</p></Link>
                  
                    </li>
                
                    <li className="nav-item">
                      <Link className={"px- py-2 flex items-center  font-bold leading-snug text-white hover:opacity-75 " + (navbarOpen? " ": "px-2")} to="/cart"> 
                      <FontAwesomeIcon icon={faCartShopping}/>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </>
        );
      }
        


export default Header;