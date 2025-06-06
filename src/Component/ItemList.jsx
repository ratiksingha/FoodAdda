import {IMG_CDN_URL} from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../slice/cartSlice";
import { useState } from "react";


const ItemList = ({ items }) => {

    const [addedItemId, setAddedItemId] = useState(null);

    const dispatch = useDispatch();
    const handleAddItem=(item)=>{
        dispatch (addItem(item));
        setAddedItemId(item.card.info.id);
        setTimeout(() => setAddedItemId(null), 1000);
    }

   


    return (
       <div>
            <div className="space-y-4">
            {items.map((item) => (
            <div
                key={item.card.info.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-100 flex items-center justify-between p-4"
            >
            <div className="flex-1 pr-4">
            <div className="flex items-center mb-1">
            <span className="text-xs mr-1">{item.card.info.isVeg ? "🟢" : "🔴"}</span>
            <span className="font-semibold text-base">{item.card.info.name}</span>
            <span className="ml-2 text-sm text-gray-700">
              - ₹               
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
          </div>
          <div className="text-xs text-gray-500">{item.card.info.description}</div>
        </div>
        <div className="w-28 flex flex-col items-center">
          <img
            src={IMG_CDN_URL + item.card.info.imageId}
            className="w-full h-24 object-cover rounded-lg border mb-2"
            alt={item.card.info.name}
          />
          <button
            className="px-4 py-1 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-semibold shadow transition"
            onClick={() => handleAddItem(item)}
          >
            Add +
          </button>
         {/* Animated text when item is added */}
              {addedItemId === item.card.info.id && (
                <span className="mt-2 text-green-600 text-xs font-semibold animate-bounce">
                  Item added to cart!
                </span>
              )}
        </div>
      </div>
    ))}
  </div>
</div>
    );
};

export default ItemList;