import { useState } from "react";



import "./index.css";

const navItems = [
    {
      title: "Study abroad steps",
      links: [
        "Why study abroad?",
        "Where and what to study?",
        "How do I apply?",
        "After receiving an offer",
        "Prepare to depart",
        "Arrive and thrive",
      ],
    },
    {
      title: "Study destinations",
      links: [
        "Study in Australia",
        "Study in UK",
        "Study in Canada",
        "Study in USA",
        "Study in New Zealand",
        "Study in Germany",
      ],
    },
    {
      title: "Find a course",
      links: [
        "Course advice",
        "Courses with instant offer",
        "Study abroad courses",
        "Scholarships",
        "Find a university",
        "Complete University Guide (COG)",
      ],
    },
    {
      title: "Student Essentials",
      links: [
        "Money transfer",
        "Student health cover",
        "Student banking",
        "Accommodation",
        "SIM cards",
        "Guardianship",
      ],
    },
  ];
  

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const renderNavLinks = () => {
    return(
        <nav className={menuOpen ? "active" : ""}>
            {
                navItems.map((item,index)=>(
                    <div className="dropdown" key={index}>
                        <span>{item.title}</span>
                        <ul>
                            {
                                item.links.map((link,idx)=>(
                                    <li key={idx}><a href="/">{link}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }

        </nav>
    )
  }
  

  return (
    <header>
      <div className="container">
        <a href="/">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="logo" className="logo" />
        </a>

        {renderNavLinks()}

        <div className="toggle-container" onClick={toggleMenu}>
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"} active`}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
