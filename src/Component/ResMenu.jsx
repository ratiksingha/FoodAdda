
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
  

  const { avgRating, name ,costForTwoMessage } = restaurantInfo || {};
 
  const restaurantName = name || "Loading...";

  return (
    <div className='text-center'>
      <h1 className='font-bold my-8 text-2xl'>{restaurantName}</h1>
      <p className='text-center'>Rating:{avgRating}</p>
      <p>{costForTwoMessage}</p>
      <br />
      

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
