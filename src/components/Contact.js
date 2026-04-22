import "./Contact.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useEffect } from "react";

const Contact = () => {
  const nameRef = useRef();
  const hasFocused = useRef(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  useEffect(() => {
    const container = document.querySelector(".center");
    const section = document.getElementById("contact");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFocused.current) {
          nameRef.current?.focus();
          hasFocused.current = true; //no re-render
        }
      },
      {
        root: container,
        threshold: 0.4,
      },
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="contact-title">
        <button>
          <FontAwesomeIcon icon={faPlus} /> Contact
        </button>
      </div>

      <div className="contact-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              ref={nameRef}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
