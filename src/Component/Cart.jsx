import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../slice/cartSlice";
import { Link , useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleCheckout = () =>{
    //When user click on checkout btn he should redirect to checkout page
    navigate("/checkout");

  }



  return (
    <div className="min-h-screen bg-[#f5f3ee] py-8 pb-20">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 tracking-tight">
        Cart
      </h1>
      <div className="flex flex-col items-center">
        {cart.items.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
        <img
            src="https://cdn-icons-png.flaticon.com/128/15814/15814884.png"
            alt="Empty Cart"
            className="w-40 mb-4"
        />
        <p className="text-lg text-gray-500 font-medium mb-2">Your cart is empty</p>
        <p className="text-sm text-gray-400">You can go back and add some delicious food!</p>
        </div>
        ) : (
          <div className="w-full max-w-2xl">
            {cart.items.map((item) => (
              <div
                key={item.card.info.id}
                className="flex items-center border-b border-gray-200 py-6 px-2 bg-white hover:shadow transition mb-2 rounded-lg"
              >
                <img
                  src={IMG_CDN_URL + item.card.info.imageId}
                  alt={item.card.info.name}
                  className="w-20 h-20 object-cover rounded-lg border mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-base font-semibold text-gray-800">{item.card.info.name}</h2>
                  <p className="text-xs text-gray-500 mb-1">
                    {item.card.info.isVeg ? "🟢 Veg" : "🔴 Non-Veg"}
                  </p>
                  <p className="text-sm text-gray-700">
                    ₹
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{item.card.info.description}</p>
                </div>
                <div className="flex flex-col items-center ml-4">
                  <div className="flex items-center border rounded-lg overflow-hidden">
                    <button
                      className="px-3 py-1 bg-gray-100 text-lg font-bold text-gray-700 hover:bg-gray-200"
                      onClick={() => handleRemoveItem(item)}
                    >
                      −
                    </button>
                    <span className="px-4 py-1 text-base font-semibold bg-white">
                      {item.quantity || 1}
                    </span>
                    <button
                      className="px-3 py-1 bg-gray-100 text-lg font-bold text-green-600 hover:bg-green-100"
                      onClick={() => handleAddItem(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-8 mb-2 px-2">
              <button
                className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
              <button
                  className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              <span className="text-lg font-bold text-gray-700">
                Total: ₹
                {cart.items.reduce(
                  (total, item) =>
                    total +
                    (item.quantity || 1) *
                      (item.card.info.price
                        ? item.card.info.price / 100
                        : item.card.info.defaultPrice / 100),
                  0
                )}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;