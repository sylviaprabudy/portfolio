import React, { useState } from 'react';

import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
    return (
        <body id="page-top">
            <Nav></Nav>
            <main>
                <div>

                    <About></About>
                    <Portfolio></Portfolio>
                    <Contact></Contact>
                    <Resume></Resume>
                </div>
            </main>
        </body>
    );
}

export default App;
