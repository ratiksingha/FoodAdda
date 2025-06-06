
import React, { useState } from 'react';
import useResMenu from '../utils/useResMenu'; // Custom hook to fetch restaurant menu data
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../utils/constant'; // Constant for image CDN URL
import ResCatergory from './ResCategory';

const ResMenu = () => {
  const { resId } = useParams();
  const menuData = useResMenu(resId);
  const restaurantInfo = menuData.restaurantInfo;
  const menuItems = menuData.menuItems;
  const [showIndex, setShowIndex] = useState(null);

  if (!restaurantInfo || !menuItems) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <div className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const { avgRating, name, costForTwoMessage, cloudinaryImageId } = restaurantInfo;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-6 mt-8">
      {cloudinaryImageId && (
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
        />
      )}
      <h1 className="font-bold text-2xl mb-2 text-center">{name}</h1>
      <div className="flex justify-center gap-4 mb-2 text-gray-600">
        <span>⭐ {avgRating}</span>
        <span>•</span>
        <span>{costForTwoMessage}</span>
      </div>
      <hr className="my-6" />
      {menuItems.map((category, index) => (
        <ResCatergory
          data={category.card?.card}
          key={category.card.card.categoryId}
          showItems={index === showIndex}
          setShowIndex={(clickedIndex) =>
            setShowIndex(showIndex === clickedIndex ? null : clickedIndex)
          }
          index={index}
        />
      ))}
    </div>
  );
};

export default ResMenu;
