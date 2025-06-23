import {gsap} from "gsap";
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

import React from 'react'
import Navbar from "./Components/Navbar";
import Hero from "./Components/hero";
import Cocktails from "./Components/Cocktails";
import About from "./Components/About";
import Art from "./Components/Art";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";

const App = () => {
    return (
       <main>
        <Navbar />
        <Hero />
        <Cocktails />
        <About />
        <Art />
        <Menu />
        <Contact />
       </main>
    )
}
export default App
