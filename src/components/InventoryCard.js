export default function InventoryCard(props) {
  return (
    <div className="inventory-card">
      <img className="inventory-card-img" src={props.img}></img>
      <h4 className="inventory-card-heading">
        {props.name} - {props.color}
      </h4>
      <p>${props.price.toFixed(2)}</p>
      <button
        className="btn"
        onClick={event => props.addItemToCart(event, props.id)}
      >
        ADD TO CART
      </button>
    </div>
  );
}
