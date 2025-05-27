import { useSelector } from "react-redux";
import {IMG_CDN_URL} from "../utils/constant";
const Cart=()=>{

    const cart = useSelector((store) => store.cart);

 
    
   
    return(
        <div>
            <h1 className="text-2xl font-bold text-center my-4">Cart Items</h1>
            <div className="flex flex-col items-center">
                {cart.items.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty!</p>
                ) : (
                    cart.items.map((item) => (
                        <div
  key={item.card.info.id}
  className="flex flex-col md:flex-row items-center border rounded-lg shadow-md p-4 mb-6 w-full max-w-2xl bg-white transition hover:shadow-lg"
>
  <img
    src={IMG_CDN_URL + item.card.info.imageId}
    alt={item.card.info.name}
    className="w-full md:w-40 h-40 object-cover mb-4 md:mb-0 md:mr-6 rounded-lg border"
  />
  <div className="flex-1 flex flex-col items-start">
    <h2 className="text-lg font-semibold mb-1">{item.card.info.name}</h2>
    <p className="text-sm text-gray-500 mb-2">
      {item.card.info.isVeg ? "🟢 Vegetarian" : "🔴 Non-Vegetarian"}
    </p>
    <p className="text-gray-600 mb-1">
      Price: ₹
      {item.card.info.price
        ? item.card.info.price / 100
        : item.card.info.defaultPrice / 100}
    </p>
    <p className="text-sm text-gray-500">{item.card.info.description}</p>
  </div>
</div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Cart;