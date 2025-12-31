import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaEnvelope
} from "react-icons/fa6";

function Contact() {
  return (
    <section id="contact" className="section-block">
      <h2>Contact</h2>

      <div className="contact-list">
        <a href="mailto:vyshravan@outlook.com" target="_blank" rel="noreferrer">
<FaEnvelope />
          <span>vyshravan@outlook.com</span>
        </a>

        <a
          href="https://linkedin.com/in/vyshrawan-p-795b5b256"
          target="_blank"
          rel="noreferrer"
        >
         <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/VyshrawanP"
          target="_blank"
          rel="noreferrer"
        >
<FaGithub />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.instagram.com/vyshrawan/"
          target="_blank"
          rel="noreferrer"
        >
<FaInstagram />
          <span>Instagram</span>
        </a>

        <a
          href="https://x.com/vyshravan"
          target="_blank"
          rel="noreferrer"
        >
<FaXTwitter />
          <span>X </span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
