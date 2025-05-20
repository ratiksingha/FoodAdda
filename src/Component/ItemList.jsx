import {IMG_CDN_URL} from "../utils/constant";

const ItemList = ({ items }) => {
    return (
        <div>
            <div>
                {items.map((item) => (
                    <div
                        key={item.card.info.id}
                        className="p-2 m-2 border-gray-200 border-b-2 text-left flex items-start"
                    >
                        <div className="flex-1 pr-4">
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
                        <div>
                            <img
                                src={IMG_CDN_URL + item.card.info.imageId}
                                className="w-20 h-16 object-cover rounded"
                                alt={item.card.info.name}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemList;