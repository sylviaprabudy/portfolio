import React from 'react';
//import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {

  return (
    <header >
      <h1>Lernantino</h1>
      //<img src={coverImage} alt="wooden background"></img>
      {props.children}
    </header>
  );
}

export default Header;
