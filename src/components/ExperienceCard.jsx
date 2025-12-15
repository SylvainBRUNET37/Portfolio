import "/src/styles/project-card.css";

export default function ExperienceCard({ project }) {
  return (
    <a href={project.link || "#"} className="pcard">
      <div className="pcard-media">
        <img src={project.img} alt={project.title} className="pcard-img" />
      </div>

      <div className="pcard-body">
        <div className="pcard-header">
          <h3 className="pcard-title">{project.title}</h3>
          {project.period && (
            <span className="pcard-period">{project.period}</span>
          )}
        </div>

        <div className="pcard-desc space-y-2">
        {project.description.map((line, i) => (
            <p key={i}>{line}</p>
        ))}
        </div>

        <div className="pcard-tags">
          {project.tech.map((t) => (
            <span key={t} className="pcard-tag">{t}</span>
          ))}
        </div>
      </div>
    </a>
  );
}
