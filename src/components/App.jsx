import "../styles/index.scss";
import Recipes from "./Recipes";
import computer from "../images/computer.png";
import lilly from "../images/lilly.svg";
import Whatever from "./Whatever";

//import React from 'react'

const App = () => {
    return (
        <>
            <section className="hero"></section>  
            <main>
                <section>
                    <h1>Oh Hai, React</h1>
                </section>
                <img src={computer} alt="computer" width="250" />
                <img src={lilly} alt="lilly" width="250" />
                <Recipes /> 
                <Whatever />
            </main>
        </>
    );
};

export default App;