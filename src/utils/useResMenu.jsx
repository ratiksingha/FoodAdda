import { use, useEffect, useState } from "react";
import axios from "axios";
import { MENU_API_URL  } from "./constant";
import useLocation from "../utils/useLocation"; 
import { getMenuApiUrl } from "./constant";  
const useResMenu = (resId)=>{


  
    const { location } = useLocation();
    const [resMenu, setResMenu] = useState([]);

    useEffect(()=>{
        fetchMenu(resId);
    },[]);

    const fetchMenu =async ()=>{
        try {
            const response = await axios.get(
             getMenuApiUrl(resId, location.lat, location.lng)
            );
            const data = response.data.data.cards;
             
            setResMenu(data);
          } catch (err) {
            console.log('Error in making the API call');
          }
    }
    const restaurantInfo = resMenu[2]?.card?.card?.info;
   
    const menuItems = resMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
   
    return {restaurantInfo, menuItems};

}

export default useResMenu;
