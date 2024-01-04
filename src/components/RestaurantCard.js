const RestaurantCard = (props) => {
  const { resData } = props;
  const { title, rating, meta2, image } = resData?.store;
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={image.items[0].url} alt="" />
      <h3>{title?.text}</h3>
      <p>Rating: {parseFloat(rating?.text)} </p>
      <p>{meta2[1].accessibilityText}</p>
    </div>
  );
};

export default RestaurantCard;