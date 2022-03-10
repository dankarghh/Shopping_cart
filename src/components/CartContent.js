export default function CartContent(props) {
  return (
    <div className="cart-content">
      <img className="cart-content-img" src={props.img}></img>
      <div className="cart-content-body">
        <div className="cart-content-name">{props.name}</div>
        <div className="cart-content-details">
          ${props.price.toFixed(2)}
          <div
            className="cart-btn-qty cart-btn-qty__minus"
            onClick={event => props.decreaseCartQty(event, props.id)}
          >
            <img src="../images/minus-white.svg" />
          </div>
          {props.qty}
          <div
            className="cart-btn-qty cart-btn-qty__plus"
            onClick={event => props.increaseCartQty(event, props.id)}
          >
            <img src="../images/plus-white.svg" />
          </div>
          <button
            className="cart-btn-trash"
            onClick={event => props.removeFromCart(event, props.id)}
          >
            <img src="../images/cancel_white.svg"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

// export default function CartContent(props) {
//   return (
//     <div className="cart-content">
//       <img className="cart-content-img" src={props.img}></img>

//       <div>
//         <div className="cart-content-name">
//           {props.name}
//           <button
//             className="cart-btn-trash"
//             onClick={event => props.removeFromCart(event, props.id)}
//           >
//             <img src="../images/trash-white.svg"></img>
//           </button>
//         </div>
//         <div className="cart-content-details">
//           ${props.price.toFixed(2)} x{"   "}
//           <div
//             className="cart-btn-qty"
//             onClick={event => props.decreaseCartQty(event, props.id)}
//           >
//             <img src="../images/minus-white.svg" />
//           </div>
//           QTY: {props.qty}
//           <div
//             className="cart-btn-qty"
//             onClick={event => props.increaseCartQty(event, props.id)}
//           >
//             <img src="../images/plus-white.svg" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
