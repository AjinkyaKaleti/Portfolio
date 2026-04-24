import { faFilePdf, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.css";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/cv.pdf";
    link.download = "Ajinkya_CV.pdf";
    link.click();
  };
  return (
    <div className="AboutMe">
      <div className="about-title">
        <button>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          &nbsp;Introduction{" "}
        </button>
      </div>
      <div>
        <p className="about-desc">
          My name is Ajinkya Suresh Kaleti and I am a Web Developer.
          Specialization in React JS development in frontend and also having
          knowledge of MERN stack.I am having a good knowledge of project
          building from scratch to running website, as from my self made project
          I have been learning the use of other resources required for MERN
          stack like live server like railway, hostinger for deployment, POSTMAN
          for test api requests, and cloudinary for image storage that allows us
          to fecth images from network directly without storing. MongoDB has
          been also one of my part of learnings.Concepts like Axios, API Context
          and JWT token was my own learnings, as UseCallback and UseMemo are
          important still using the UseEffect, UseRef and UseState. Also I am
          good at Javascript as it is important to write code for project.
        </p>
      </div>
      <div>
        <a href="/assets/cv.pdf" download>
          <button className="download-button" onClick={handleDownload}>
            <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: "18px" }} />{" "}
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
