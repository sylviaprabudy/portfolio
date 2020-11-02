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
            description: 'MySQL/Express/Handlebars/SASS',
            link: "http://git-cookin.herokuapp.com/",
            repo: "https://github.com/sylviaprabudy/git-cookin"
        },
        {
            name: 'covid-traveling',
            description: 'JQuery/API/Materialize',
            link: "https://sylviaprabudy.github.io/covid-traveling/",
            repo: "https://github.com/sylviaprabudy/covid-traveling"
        },
        {
            name: 'br-for-java',
            description: 'MERN Stack',
            link: "https://br-for-java.herokuapp.com/",
            repo: "https://github.com/sylviaprabudy/br-for-java"
        },
        {
            name: 'run-buddy',
            description: 'HTML/CSS',
            link: "https://sylviaprabudy.github.io/run-buddy/",
            repo: "https://github.com/sylviaprabudy/run-buddy"
        },
        {
            name: 'tech-blog',
            description: 'Node/MySQL/Sequalize',
            link: "https://tech-blog-0107.herokuapp.com/",
            repo: "https://github.com/sylviaprabudy/tech-blog"
        },
        {
            name: 'weather-dashboard',
            description: 'JavaScript/API/Bootstrap',
            link: "https://sylviaprabudy.github.io/weather-dashboard/",
            repo: "https://github.com/sylviaprabudy/weather-dashboard"
        },
        {
            name: 'food-festival',
            description: 'JS/Node/PWA',
            link: "https://sylviaprabudy.github.io/food-festival/",
            repo: "https://github.com/sylviaprabudy/food-festival"
        },
        {
            name: 'code-quiz',
            description: 'JavaScript/JQuery/CSS',
            link: "https://sylviaprabudy.github.io/timed-code-quiz/",
            repo: "https://github.com/sylviaprabudy/timed-code-quiz"
        },
        {
            name: 'password-generator',
            description: 'HTML/CSS/JavaScript',
            link: "https://sylviaprabudy.github.io/password-generator/",
            repo: "https://github.com/sylviaprabudy/password-generator"
        },
        {
            name: 'note-taker',
            description: 'Node/Express/Bootstrap',
            link: "http://note-taker-90210.herokuapp.com/",
            repo: "https://github.com/sylviaprabudy/note-taker"
        },
        {
            name: 'work-day-scheduler',
            description: 'HTML/CSS/JavaScript',
            link: "https://sylviaprabudy.github.io/work-day-scheduler/",
            repo: "https://github.com/sylviaprabudy/work-day-scheduler"
        },
        {
            name: 'taskmaster-pro',
            description: 'HTML/CSS/JavaScript',
            link: "https://sylviaprabudy.github.io/taskmaster-pro/",
            repo: "https://github.com/sylviaprabudy/taskmaster-pro"
        },
        {
            name: 'git-it-done',
            description: 'HTML/Bootstrap/JavaScript',
            link: "https://sylviaprabudy.github.io/git-it-done/",
            repo: "https://github.com/sylviaprabudy/git-it-done"
        }
    ]);

    return (
        <section className="p-0">
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">
                   
                        {projects.map((project, idx) => (
                            <Project
                                project={project}
                                key={"project" + idx}
                            />
                        ))}
                    </div>
                
            </div>
        </section>
    );
};

export default Portfolio;
