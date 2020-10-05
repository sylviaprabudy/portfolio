import React, { useState } from 'react';
import Project from "../Project";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: 'git-cookin',
            description: 'MERN Stack',
            link: "https://github.com",
            repo: "https://github.com"
        },
        {
            name: 'covid-traveling',
            description: 'MERN Stack',
            link: "https://github.com",
            repo: "https://github.com"
        },
        {
            name: 'run-buddy',
            description: 'HTML/CSS',
            link: "https://github.com",
            repo: "https://github.com"
        },
        {
            name: 'tech-blog',
            description: 'Node/IoT',
            link: "https://github.com",
            repo: "https://github.com"
        },
        {
            name: 'weather-dashboard',
            description: 'React/JavaScript/CSS',
            link: "https://github.com",
            repo: "https://github.com"
        },
    ]);

    return (
        <section className="p-0">
            <div className="container-fluid p-0">
            <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                    <hr className="my-4" />

                <div className="row no-gutters popup-gallery">
                    
                    <div className="col-lg-4 col-sm-6">
                        
                        {projects.map((project, idx) => (
                            <Project
                                project={project}
                                key={"project" + idx}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
