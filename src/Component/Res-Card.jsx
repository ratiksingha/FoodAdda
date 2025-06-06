import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const RestaurantCard = ({ props }) => {
  const { name, avgRating, cuisines, sla, cloudinaryImageId, costForTwo } = props.info;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 flex flex-col overflow-hidden group h-full">
      <div className="relative">
        <img
          src={
            cloudinaryImageId
              ? IMG_CDN_URL + cloudinaryImageId
              : "https://via.placeholder.com/400x300?text=No+Image"
          }
          alt={name}
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base font-bold text-gray-800 mb-1 truncate">{name}</h3>
        <div className="flex items-center text-xs text-gray-600 mb-2 gap-2">
          <span className="font-bold text-green-600 flex items-center">
            <svg className="w-4 h-4 mr-1 inline" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/></svg>
            {avgRating}
          </span>
          <span>•</span>
          <span>{sla?.slaString || `${sla?.deliveryTime || "30"} MINS`}</span>
          <span>•</span>
          <span>{costForTwo || "₹200 for two"}</span>
        </div>
        <div className="text-xs text-gray-400 line-clamp-2">
          {cuisines?.join(", ")}
        </div>
      </div>
    </div>
  );
};

export const isTopRestaurant = (RestaurantCard) => {
  return function TopRestaurantCard(props) {
    return (
      <div className="relative">
        <span className="absolute top-2 right-2 bg-orange-50 text-gray-900 text-xs font-bold px-3 py-1 rounded shadow z-10">
          👌 User Recommended
        </span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;