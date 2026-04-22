import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import LeftCard from "./components/LeftCard";
import RightMenu from "./components/RightMenu";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const scrollRef = useRef();
  const lenisRef = useRef();

  useEffect(() => {
    const first = document.getElementById("about");
    if (first) first.classList.add("visible");

    const firstMenu = document.querySelector(".menu-item");
    if (firstMenu) firstMenu.classList.add("active");
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: scrollRef.current,
      content: scrollRef.current,
      smooth: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="container">
      <div className="left">
        <LeftCard />
      </div>
      <div className="center" ref={scrollRef}>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <div className="right">
        <RightMenu lenisRef={lenisRef} />
      </div>
    </div>
  );
}

export default App;
