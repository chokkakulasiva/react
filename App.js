import React from 'react';
import ReactDOM from 'react-dom/client';


// React Element => React.createElement();

// JSX - HTML-like or XML-like syntax
const TitleComponent = () => <h1 id="heading">Namaste React using JSX </h1>;

// React Functional Component

const HeadingComponent = () => {
    return (
        <div id="container"> 
        <TitleComponent /> 
        {TitleComponent()}
        <TitleComponent></TitleComponent>
        <h2>{100 + 200}</h2>
        <h1 className='heading'>Namaste React Functional Component!!</h1> 
        </div>
        )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);