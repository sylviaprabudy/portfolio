import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
      } = props;
    
      useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
      }, [currentPage]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
             <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          {pages.map((Page) => (
            <li
              className={`nav-item ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <span
                onClick={() => setCurrentPage(Page)}
              >
                {capitalizeFirstLetter(Page.name)}
              </span>
            </li>
          ))}
        </ul>
        </div>
      </nav>
       );
    }
        // <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        //     <div className="container">
        //         <a className="navbar-brand js-scroll-trigger" href="#page-top">Sylvia Prabudy</a>
        //         <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarResponsive">
        //             <ul className="navbar-nav ml-auto">
        //                 <li className="nav-item">
        //                     <a className="nav-link js-scroll-trigger" href="#about">About</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link js-scroll-trigger" href="#services">Services</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
   

export default Nav;