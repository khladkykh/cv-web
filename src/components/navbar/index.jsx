import "./style.css"
import { useState, useEffect, useRef } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

const Menu = () => {

    const [activeSection, setActiveSection] = useState(null);
    const observer = useRef(null);
    
    useEffect(() => {
        //create new instance and pass a callback function
            observer.current = new IntersectionObserver((entries) => {
              const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
        //Update state with the visible section ID
              if (visibleSection) {
                setActiveSection(visibleSection.id);
              }
            });
        
        //Get custom attribute data-section from all sections
            const sections = document.querySelectorAll('[data-section]');
        
            sections.forEach((section) => {
              observer.current.observe(section);
            });
        //Cleanup function to remove observer
            return () => {
              sections.forEach((section) => {
                observer.current.unobserve(section);
              });
            };
          }, []);

    
    return(
    <>
        <a href="#home" className={activeSection === 'home' ? 'active' : ''}><p>Home</p></a>
        <a href="#about"  className={activeSection === 'about' ? 'active' : ''}><p>About</p></a>
        <a href="#education"  className={activeSection === 'education' ? 'active' : ''}><p>Education</p></a>
        <a href="#skills"  className={activeSection === 'skills' ? 'active' : ''}><p>Skills</p></a>
        <a href="#projects"  className={activeSection === 'projects' ? 'active' : ''}><p>Projects</p></a>
        <a href="#contacts" className={activeSection === 'contacts' ? 'active' : ''}><p>Contacts</p></a>
    </>
)}

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    

    return(
        <nav className="cv__navbar">
                <div className="cv__navbar-links_logo">
                    <h2 className="gradient__text">KH.</h2>
                </div>
                <div className="cv__navbar-links_container">
                    <Menu/>
                </div>

                <div className="cv__navbar-menu">

                {toggleMenu
                ? <CancelIcon sx={{color: "#E1BEE7", fontSize: 27}} onClick={() => setToggleMenu(false)}/>
                : <MenuIcon sx={{color: "#E1BEE7", fontSize: 27}} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className="cv__navbar-menu_container scale-up-center">
                        <div className="cv__navbar-menu_container-links">
                            <Menu/>
                        </div>
                    </div>)}
            </div>
        </nav>
        
    )
}

export default Navbar;