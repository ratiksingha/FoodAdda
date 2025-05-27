import {IMG_CDN_URL} from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../slice/cartSlice";


const ItemList = ({ items }) => {

    const dispatch = useDispatch();
    const handleAddItem=(item)=>{
        dispatch (addItem(item));
    }

   


    return (
        <div>
            <div>
                {items.map((item) => (
                  
                    <div
                        key={item.card.info.id}

                        
                        className="  p-2 m-2 border-gray-200 border-b-2 text-left flex items-start justify-between"
                    >
                        <div className="flex-1 pr-2">
                            <span className="text-xs mr-1">{(item.card.info.isVeg)?"🟢 ":"🔴 "}</span>
                            <span className="font-semibold">{item.card.info.name}</span>
                            <span>
                                {" "}
                                - ₹{" "}
                                {item.card.info.price
                                    ? item.card.info.price / 100
                                    : item.card.info.defaultPrice / 100}
                            </span>
                            <div className="text-xs text-gray-500 mt-1">
                                <p>{item.card.info.description}</p>
                            </div>
                        </div>
                <div className=" w-3/12 p-4 flex flex-col  items-center justify-between">
                    <img
                        src={IMG_CDN_URL + item.card.info.imageId}
                        className="w-full object-cover rounded mb-2"
                        alt={item.card.info.name}
                    />
                    <button className="p-2 bg-white shadow-lg rounded-lg text-xs border border-gray-200 hover:bg-gray-100 transition  self-center"  onClick={() => handleAddItem(item)}>
                        Add +
                    </button>
                </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemList;