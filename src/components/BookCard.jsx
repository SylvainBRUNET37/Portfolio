import "/src/styles/book-card.css";

export default function BookCard({ book }) {
  const base = import.meta.env.BASE_URL;

  return (
    <a
      href={book.link || "#"}
      className="bcard"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bcard-media">
        <img
          src={`${base}${book.img.replace(/^\//, "")}`}
          alt={book.title}
        />
      </div>

      <div className="bcard-body">
        <h3 className="bcard-title">{book.title}</h3>
        <p className="bcard-author">{book.author}</p>

        <p className="bcard-desc">{book.description}</p>

        <div className="bcard-progress">
          <div
            className="bcard-progress-bar"
            style={{ width: `${book.progress}%` }}
          />
        </div>

        <span className="bcard-progress-text">
          {`${book.progress}% read`}
        </span>
      </div>
    </a>
  );
}
