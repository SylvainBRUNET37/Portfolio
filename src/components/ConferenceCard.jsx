import "/src/styles/conf-card.css";

function getYouTubeThumbnail(url) {
  const id = url.split("v=")[1];
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export default function ConferenceCard({ conference }) {
  const thumbnail = conference.youtube
    ? getYouTubeThumbnail(conference.youtube)
    : null;

  return (
    <a
      href={conference.youtube}
      target="_blank"
      rel="noopener noreferrer"
      className="conf-card"
    >
      {thumbnail && (
        <img
          src={thumbnail}
          alt={conference.title}
          className="conf-thumb"
        />
      )}

      <div className="conf-content">
        <h3 className="conf-title">{conference.title}</h3>
      </div>
    </a>
  );
}
