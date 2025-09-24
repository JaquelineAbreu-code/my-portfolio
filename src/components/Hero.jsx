import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <h2>Frontend & JavaScript Developer</h2>
          <p>Building modern, accessible web experiences using HTML, CSS, JavaScript and Node.js.</p>
          <div className="hero-cta">
            <a href="#projects" className="btn primary">See Projects</a>
            <a href="#contact" className="btn ghost">Contact</a>
          </div>
        </div>
        <div className="hero-badges" aria-hidden>
          {/* Ex.: logos em /public/assets/git.svg etc */}
          <img src="/assets/git.svg" alt="Git" />
          <img src="/assets/javascript.svg" alt="JavaScript" />
          <img src="/assets/html.svg" alt="HTML5" />
          <img src="/assets/css.svg" alt="CSS3" />
          <img src="/assets/nodejs.svg" alt="Node.js" />
        </div>
      </div>
    </section>
  )
}
