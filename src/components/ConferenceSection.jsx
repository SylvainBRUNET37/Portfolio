
import ConferenceCard from "./ConferenceCard";

export default function ConferenceSection({ section, conferences }) {
  return (
    <section className="conf-section">
      <h2 className="conf-section-title">{section}</h2>

      <div className="conf-grid">
        {conferences.map((conf) => (
          <ConferenceCard
            key={conf.title}
            conference={conf}
          />
        ))}
      </div>
    </section>
  );
}
