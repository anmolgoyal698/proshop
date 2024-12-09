import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ rating, text }: { rating: number; text: string }) => {
  const ratingDecimalPart = rating % 1;
  return (
    <div className="rating">
      {Array.from({ length: Math.floor(rating) }, (_, idx) => (
        <span key={idx}>
          <FaStar key={idx} />
        </span>
      ))}
      {ratingDecimalPart > 0 && (
        <span>
          {ratingDecimalPart >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
      )}

      {text && <span className="rating-text">{text}</span>}
    </div>
  );
};

export default Rating;
