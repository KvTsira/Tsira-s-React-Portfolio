import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/KvTsira" target="_blank" rel="noreferrer">
            Tsira Kvaratskhelia
          </a>
          .
          <hr />
          <a
            href="www.linkedin.com/in/tsira-kvaratskhelia-92aa2b3"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a href="https://google.com" target="_blank" rel="noreferrer">
            Link to google (placeholder)
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;