import "/src/styles/game-card.css";

export default function GameCard({ game }) {
  const base = import.meta.env.BASE_URL;

  return (
    <a
      href={game.link}
      target="_blank"
      rel="noopener noreferrer"
      className="game-frame w-full"
    >
      <img
        src={`${base}${game.img.replace(/^\//, "")}`}
        alt=""
        loading="lazy"
      />
    </a>
  );
}
