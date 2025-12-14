import "/src/styles/game-card.css";

export default function GameCard({ game }) {
  return (
    <a
      href={game.link}
      target="_blank"
      rel="noopener noreferrer"
      className="game-frame w-full"
    >
      <img
        src={game.img}
        alt=""
        loading="lazy"
      />
    </a>
  );
}
