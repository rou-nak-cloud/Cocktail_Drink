import {gsap} from "gsap";
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

import React from 'react'
import Navbar from "./Components/Navbar";

const App = () => {
    return (
       <main>
        <Navbar />
       </main>
    )
}
export default App
