
import React, { useState } from 'react';
import useResMenu from '../utils/useResMenu'; // Custom hook to fetch restaurant menu data

import { useParams } from 'react-router-dom';

import { IMG_CDN_URL } from '../utils/constant'; // Constant for image CDN URL
import ResCatergory from './ResCategory';

const ResMenu = () => {
const { resId } = useParams(); // Access restaurant ID from URL
 
const menuData=useResMenu(resId);

  const restaurantInfo = menuData.restaurantInfo;
 
  const menuItems = menuData.menuItems;

  const [showIndex,setShowIndex]=useState(null);

  const { avgRating, name ,cloudinaryImageId } = restaurantInfo || {};
 
  const restaurantName = name || "Loading...";

  return (
    <div className='text-center'>
      <h1 className='font-bold my-10 text-2xl'>{name}</h1>

      {/* Accordion */}
      {
        menuItems?.map((category,index)=>
        <ResCatergory 
        data={category.card?.card} 
        key={category.card.card.categoryId} 
        showItems={index===showIndex }
        setShowIndex={(clickedIndex)=>
          setShowIndex(showIndex===clickedIndex? null :clickedIndex)}
        index={index}/>)
      }

    </div>
  );
};

export default ResMenu;
