import PropTypes from "prop-types";
import { useCart } from "react-use-cart";

function Cart() {
  const { isEmpty, cartTotal, items, updateItemQuantity, removeItem } =
    useCart();

  if (isEmpty)
    return <p className="text-center text-gray-600">Your cart is empty</p>;

  return (
    <div className="p-4 mt-10 mb-20">
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center w-[60%] m-auto justify-between bg-white p-4 rounded-lg shadow-md"
          >
          
            <div className="flex justify-end items-center gap-16 text-xl">
            <img
              src={item.img}
              alt={item.name}
              className="w-40 h-40 object-cover rounded-lg mr-4"
            />
              <span className="font-semibold">{item.name}</span>
              <span className="font-semibold">
                {item.quantity} x{"     "} {"$"} {item.price}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors"
              >
                -
              </button>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition-colors"
              >
                +
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="relative w-[60%] m-auto mt-4">
        <h1 className="bg-green-400 px-4 py-2 w-40 text-center font-semibold text-xl absolute right-0 rounded-lg">
          Total : {cartTotal}{" "}
        </h1>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.func,
};

export default Cart;
