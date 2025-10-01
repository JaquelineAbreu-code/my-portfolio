import React from 'react';
import Vite from '/vite.svg';
import Git from '/git-scm-icon.svg';
import Javascript from '/javascript-icon.svg';
import HTML from '/w3_html5-icon.svg';
import CSS from '/w3_css-icon.svg';
import NodeJS from '/nodejs-icon.svg';
import ReactIcon from '/reactjs-icon.svg';


export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <h2>JavaScript Developer</h2>
          <p>Desenvolvedora Web iniciante, apaixonada por criar soluções digitais com JavaScript, React e Node.js. </p>
          <div className="hero-cta">
            <a href="#projects" className="btn primary">Ver projetos</a>
            <a href="#contact" className="btn ghost">contatos</a>
          </div>
        </div>
        <div className="hero-badges" aria-hidden>
          {/* Ex.: logos em /public/assets/git.svg etc */}

          <img src= {Vite} height ="100" width = "150" alt="JavaScript" />
          <img src = {Git} height ="100" width = "150" alt="JavaScript" />
          <img src={Javascript} height ="100" width = "150" alt="JavaScript" />
          <img src={HTML} height ="100" width = "150" alt="HTML5" />
          <img src={CSS} height ="100" width = "150" alt="CSS3" />
          <img src={NodeJS} height ="100" width = "150" alt="NodeJS" />
          <img src={ReactIcon} height ="100" width = "150" alt="ReactJS" />
          {/* <img src={JavaScript} alt="JavaScript" />
          <img src={HTML} alt="HTML5" />
          <img src={CSS} alt="CSS3" />
          <img src={NodeJS} alt="NodeJS" /> */}
        </div>
      </div>
    </section>
  )
}
