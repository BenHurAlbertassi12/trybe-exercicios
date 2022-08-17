import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        {/* <p>BenHur Albertassi®️</p> */}

        <a
          href="https://www.linkedin.com/in/benhur-albertassi-07bb7941/"
          target="noroferrer"
        >
          Linkdin
        </a>

        <a href="https://github.com/BenHurAlbertassi12" target="noroferrer">
          GitHub
        </a>

        <a href="https://www.instagram.com/benhuralbertassi/" target="noroferrer">
          Instagram
        </a>
      </footer>
    );
  }
}

export default Footer;
