import {gsap} from "gsap";
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

import React from 'react'
import Navbar from "./Components/Navbar";
import Hero from "./Components/hero";

const App = () => {
    return (
       <main>
        <Navbar />
        <Hero />
       </main>
    )
}
export default App
