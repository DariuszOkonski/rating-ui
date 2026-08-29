const Star = ({ star, color, hover, rating, onSetRating, onSetHover }) => {
  return (
    <span
      onClick={() => onSetRating(star)}
      key={star}
      onMouseEnter={() => onSetHover(star)}
      onMouseLeave={() => onSetHover(0)}
      className="star"
      style={{ color: star <= (hover || rating) ? color : "#ccc" }}
    >
      {"\u2605"}
    </span>
  );
};

export default Star;
