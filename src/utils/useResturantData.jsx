import { useState,useEffect } from "react";
import { API_URL } from "./constant";

const useResturantData=()=>{
    const [resturantData, setResturantData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        if (loading) return; // Prevent multiple API calls
        setLoading(true);
    
        try {
          const response = await fetch(API_URL);
          const jsonData = await response.json();
    
          const restaurants =
            jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
            //data.cards[0].card.card.gridElements.infoWithStyle.info
              ?.restaurants || [];
    
          
    
          setResturantData(restaurants); // Store  restaurants
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };

return resturantData
}

export default useResturantData;