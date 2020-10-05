import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function About() {
    const [pages] = useState([
        {
            name: "about me"
        }
    ]);
  const [currentPage] = useState(pages[0]);
  
    return (
        <header className="masthead text-center text-white d-flex">
        <div className="container my-auto">
          <div className="row">

            <div className="col-lg-10 mx-auto">
            <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
              <p className="text-faded mb-5">Full Stack Web Developer specializing in frontend development with 8 years experience developing mid to large scale websites using latest core web technologies. Expert knowledge in HTML, Advance CSS, JavaScript, JQuery, Github, React, Angular, Bootstrap, SASS, APIs, WordPress.</p>
              <hr />
              <p className="text-faded mb-5">Recently earned a Certificate in Full Stack Web Development from the University of Texas at Austin focused on Backend development using Node.js, Express.js, SQL Server(MySQL, MongoDB, SQLite), MERN Stack. My educational and professional background in technology, combined with a self-motivated problem solver, and attention to detail would make me a strong addition to the organization.</p>
              <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Check Out My Work</a>
            </div>
          </div>
        </div>
      </header>
    )
}

export default About