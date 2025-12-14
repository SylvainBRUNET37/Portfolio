export default function ConferenceCard({ conference }) {
  return (
    <div className="conf">
      <a
        href={conference.link}
        target="_blank"
        rel="noopener noreferrer"
        className="conf-title"
      >
        {conference.title}
      </a>

      {conference.youtube && (
        <a
          href={conference.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="conf-yt"
          aria-label="Watch on YouTube"
        >
          ▶︎
        </a>
      )}
    </div>
  );
}
