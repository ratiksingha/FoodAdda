import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { MENU_API_URL } from './constant';
import { useParams } from 'react-router-dom';

const ResMenu = () => {
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const resId=useParams();
  const fetchMenu = async () => {
    try {
      const response = await axios.get(
        MENU_API_URL + resId.resId
      );
      const data = response.data.data.cards;
      setResMenu(data);
    } catch (err) {
      console.log('error in making the API call');
    }
  };

  
  const restaurantInfo = resMenu[2]?.card?.card?.info;
  const menuItems = resMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const{ avgRating } = restaurantInfo || {};
  const restaurantName = restaurantInfo?.name || "Loading...";

  return <div>
   <h2>{restaurantName}</h2>
   <h3>Avg Rating:{avgRating}</h3>
   <p>Menu Items:
    <ul>
      {
        menuItems?.slice(2).flatMap((item) => {
          const newdata = item.card.card.itemCards;
          return newdata?.map((newitem) => {
            
            return (
              <li key={newitem?.card?.info?.id}>
                {newitem?.card?.info?.name} - {newitem?.card?.info?.price/100} - {newitem?.card?.info?.category}
              </li>
            );
          }) || [];
        })
      }
      </ul>
   </p>
    </div>;
};

export default ResMenu;
