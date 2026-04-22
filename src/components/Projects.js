import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";

import "./Projects.css";

const projects = [
  {
    name: "Shopping App",
    tech: "MERN Stack",
    image: "/assets/shopping.png",
    link: "https://github.com/AjinkyaKaleti/Basketbay",
    // https://github.com/AjinkyaKaleti/Basketbay-Backend
  },
  {
    name: "YouTube Search App",
    tech: "React JS",
    image: "/assets/youtube.png",
    link: "https://github.com/AjinkyaKaleti/youtubesearch-app",
  },
  {
    name: "Real Estate App",
    tech: "MERN Stack",
    image: "/assets/realestate.png",
    link: "https://github.com/ajinkyasureshkaleti-cloud/VRinfinity-new",
  },
  {
    name: "Portfolio",
    tech: "React",
    image: "/assets/portfolio.png",
    link: "https://github.com/your-username/portfolio",
  },
];

const Projects = () => {
  const ref = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".center");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      {
        root: container,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-section" ref={ref}>
      <div className="project-title">
        <button>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          &nbsp;Projects{" "}
        </button>
      </div>

      <div className="project-container">
        {projects.map((p, index) => (
          <div
            key={index}
            className={`project-card ${show ? "show" : ""}`}
            style={{
              backgroundImage: `url(${p.image})`,
              transitionDelay: `${index * 0.2}s`,
            }}
          >
            <div className="overlay">
              <h2>{p.name}</h2>
              <p>{p.tech}</p>

              <a href={p.link} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faArrowRight} className="arrow" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
