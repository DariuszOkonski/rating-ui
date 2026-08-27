const Rating = () => {
  const stars = Array.from({length: 5}, (_, i) => i + 1)

  const hovered = (index) => console.log('hovered: ', index)

  const leaved = (index) => console.log("leaved: ", index)

  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">
        {stars.map((star, index) => (
          <span 
            onMouseEnter={() => hovered(index)} key={star} className="star"
            onMouseLeave={() => leaved(index)}
            >{'\u2605'}</span>
        ))}
      </div>
    </div>
  )
}

export default Rating;