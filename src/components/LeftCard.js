import {
  faGithub,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LeftCard.css";

const LeftCard = ({ compact }) => {
  return (
    <div className={`LeftCard-innerDiv ${compact ? "compact" : ""}`}>
      <div className="Left-inner-one">
        <div>
          <h4>AJINKYA</h4>
        </div>
        <p style={{ fontSize: "10px" }}>Frontend|Web Developer</p>
      </div>
      <div className="Left-inner-two">
        <img src="/assets/my_image.jpeg" alt="" style={{ width: "100%" }} />
      </div>
      <div className="Left-inner-three">
        <div>
          <p>Specialisation:</p>
        </div>
        <div>
          <h4>Frontend and MERN stack</h4>
        </div>
      </div>
      <div className="Left-inner-four">
        <div>
          <p>From:</p>
        </div>
        <div>
          <h4>Navi Mumbai, 400709</h4>
        </div>
      </div>
      <div className="Left-inner-five">
        <div>
          <a href="https://wa.me/918898708468" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
        <div>
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </div>
        <div>
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </div>
        <div>
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </div>
      </div>
      <div className="Left-inner-six">
        <a href="https://wa.me/918898708468" target="_blank" rel="noreferrer">
          <button>Let's Connect</button>
        </a>
      </div>
    </div>
  );
};

export default LeftCard;
