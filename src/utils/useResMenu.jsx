import { useEffect, useState } from "react";
import axios from "axios";
import { MENU_API_URL } from "./constant";

const useResMenu = (resId)=>{

    const [resMenu, setResMenu] = useState([]);

    useEffect(()=>{
        fetchMenu(resId);
    },[]);

    const fetchMenu =async ()=>{
        try {
            const response = await axios.get(
              MENU_API_URL + resId
            );
            const data = response.data.data.cards;
            setResMenu(data);
          } catch (err) {
            console.log('Error in making the API call');
          }
    }
    const restaurantInfo = resMenu[2]?.card?.card?.info;
    const menuItems = resMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    
    return {restaurantInfo, menuItems};

}

export default useResMenu;
