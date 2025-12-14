import "/src/styles/book-card.css";

export default function GameCard({ game }) {
  return (
    <a
      href={game.link || "#"}
      className="bcard"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bcard-media">
        <img src={game.img} alt={game.title} />
      </div>

      <div className="bcard-body">
        <h3 className="bcard-title">{game.title}</h3>
        <p className="bcard-author">{game.developer}</p>

        <p className="bcard-desc">{game.description}</p>
      </div>
    </a>
  );
}
