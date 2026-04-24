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
    const first =
      document.getElementById("profile") || document.getElementById("about");
    if (first) first.classList.add("visible");

    const firstMenu = document.querySelector(".menu-item");
    if (firstMenu) firstMenu.classList.add("active");
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        root: container,
        threshold: 0.2,
      },
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
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

  useEffect(() => {
    let lastWidth = window.innerWidth;
    let timeout;

    const handleResize = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        const currentWidth = window.innerWidth;

        const crossedBreakpoint =
          (lastWidth > 1024 && currentWidth <= 1024) ||
          (lastWidth <= 1024 && currentWidth > 1024);

        if (crossedBreakpoint && lenisRef.current) {
          lenisRef.current.scrollTo(0, { immediate: true });
        }

        lastWidth = currentWidth;
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      <div className="left">
        <LeftCard />
      </div>
      <div className="center" ref={scrollRef}>
        <section id="profile" className="mobile-only">
          <LeftCard compact={true} />
        </section>
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
