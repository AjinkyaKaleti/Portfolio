import { useState, useEffect } from "react";
import "./RightMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faProjectDiagram,
  faEnvelope,
  faBars,
  faHouse,
  faCancel,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import LeftCard from "./LeftCard";

const RightMenu = ({ lenisRef }) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);

      if (window.innerWidth > 1024) {
        setOpen(false); // close drawer
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollTo = (id, e) => {
    const target = document.getElementById(id);

    if (target && lenisRef?.current) {
      lenisRef.current.scrollTo(target, {
        offset: -40,
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    }

    document
      .querySelectorAll(".menu-item")
      .forEach((i) => i.classList.remove("active"));

    if (e) e.currentTarget.classList.add("active");

    setOpen(false);

    if (id === "contact") {
      setTimeout(() => {
        const input = document.querySelector("#name");
        input?.focus();
      }, 800); // match scroll duration
    }
  };

  return (
    <>
      {/* burger menu */}
      <div className={`drawer ${open ? "open" : ""}`}>
        <button onClick={() => setOpen(false)} className="close-button">
          <FontAwesomeIcon icon={faCancel}></FontAwesomeIcon>
        </button>

        {isMobile && (
          <div className="drawer-profile">
            <LeftCard compact={true} />
          </div>
        )}

        {/* Menu Links */}
        <div className="drawer-links">
          <b style={{ fontSize: "22px" }}>
            <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> Menu
          </b>
          <p onClick={(e) => scrollTo("about", e)}>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> About
          </p>
          <p onClick={(e) => scrollTo("projects", e)}>
            {" "}
            <FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon> Projects
          </p>
          <p onClick={(e) => scrollTo("contact", e)}>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Contact
          </p>
        </div>

        {/* Social Icons (Bottom) */}
        <div className="drawer-social">
          <div className="menu-item">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </div>

          <div className="menu-item">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </div>

          <div className="menu-item">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </div>

          <div className="menu-item">
            <a
              href="https://wa.me/918898708468"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="menu-vertical">
        <div className="top-menu">
          <FontAwesomeIcon icon={faBars} onClick={() => setOpen(true)} />
        </div>

        {/* Outer static menu */}
        <div className="static-outer-menu">
          <div className="menu-item" onClick={(e) => scrollTo("about", e)}>
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>

          <div className="menu-item" onClick={(e) => scrollTo("projects", e)}>
            <FontAwesomeIcon icon={faProjectDiagram} className="icon" />
          </div>

          <div className="menu-item" onClick={(e) => scrollTo("contact", e)}>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </div>

          <div className="menu-item">
            <a
              href="https://wa.me/918898708468"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            </a>
          </div>
        </div>

        {/* empty div to arrange our menu */}
        <div></div>
      </div>
    </>
  );
};

export default RightMenu;
