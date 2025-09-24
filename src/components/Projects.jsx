import React from 'react'

const sampleProjects = [
  { id: 1, title: 'Portfolio', desc: 'Personal portfolio built with React and Sass', link: '#' },
  { id: 2, title: 'Todo App', desc: 'Vanilla JS app with localStorage', link: '#' },
  { id: 3, title: 'API Service', desc: 'Node.js REST API example', link: '#' },
]
// comentario teste
export default function Projects() {
  return (
    <section id="projects" className="container section">
      <h3>Projects</h3>
      <div className="projects-grid">
        {sampleProjects.map(p => (
          <article key={p.id} className="card project-card">
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
            <a className="btn ghost" href={p.link}>View</a>
          </article>
        ))}
      </div>
    </section>
  )
}
