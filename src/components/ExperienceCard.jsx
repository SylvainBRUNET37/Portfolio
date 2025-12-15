import "/src/styles/experience-card.css";

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

        <p className="pcard-desc">{project.description}</p>

        <div className="pcard-tags">
          {project.tech.map((t) => (
            <span key={t} className="pcard-tag">{t}</span>
          ))}
        </div>
      </div>
    </a>
  );
}
