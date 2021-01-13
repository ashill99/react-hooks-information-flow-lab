// import React, { useState } from "react";

function Header(props) {
            console.log('hello')
return (
    <div>
    <header>
    <h2>Shopster</h2>
    <button onClick={props.onDarkModeClick}>
          {props.isDarkMode ? "Dark" : "Light"} Mode
    </button>
  </header>

    </div>
    )
}

export default Header 