import React, { useEffect,useReducer } from "react";
import "./css/Body.css";
import RestaurantCard from "./Res-Card";
import Shimmer from "./Shimmer";



import { useState } from "react";
import { API_URL } from "./constant";


const reducer=(state,action)=>{
    if(action.type==='increment'){
        return {
            ...state,cardCount:Math.min(state.cardCount+1,state.dataLength),
           }
        }
    else if(action.type==='decrement'){
        return{
            ...state,cardCount:Math.max(state.cardCount-1,0)
        }
    }
    else if(action.type==='setDataLength'){
        return{
            ...state,
            dataLength:action.payload
        }
    }
    else{
        return state;
        }
}


const Body = () => {
    const[filteredData,setFilteredData]=useState([]);
    const[searchText,setSearchText]=useState("");
    
    

    const fetchData = async () => {
        const dataNew = await fetch( API_URL);
        const jsonData = await dataNew.json();
        const length=jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.length;
       dispatch({
        type:`setDataLength`,
        payload:length
       })
        setFilteredData(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    };

    useEffect(() => {
        fetchData();
    }, []);

    
    const initialState={
        cardCount:6,
        dataLength:0
    }
    const [state,dispatch]=useReducer(reducer,initialState);

    const handleAdd = () =>{
      dispatch({
        type:"increment",
      }) 
    }
    

    const handleSub = () =>{
       dispatch({
        type:`decrement`,
       })
    }

    const filterTopRated = async () =>{
        const dataNew = await fetch(API_URL);
        const jsonData = await dataNew.json();
        
       liveData=jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        
        const newFilteredData = liveData.filter((resutrant)=> resutrant.info.avgRating>4.2);

        setFilteredData(newFilteredData);
    }

    const handleSearch=()=>{
        const newFilteredData = filteredData.filter((resutrant)=> resutrant.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredData(newFilteredData);
    }

    //Conditional Rendering 
    // if(filteredData.length===0){
    //     return <Shimmer/>
    // }

    



    return filteredData.length===0? <Shimmer/> : (
        <div className="body">
            <div className="search-container">
                <input className="search" type="text" placeholder="Search for Restaurants" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }} />
                <button  type="button" class="btn btn-outline-primary"  onClick={handleSearch}>Search</button>

                <button  type="button" class="btn btn-outline-primary" onClick={filterTopRated}>Top-Rated Resturant</button>
                <button  type="button" class="btn btn-outline-primary" onClick={fetchData}>All Resturant</button>

                <button  type="button" class="btn btn-outline-primary" onClick={handleAdd}>+</button>
                <button  type="button" class="btn btn-outline-primary" onClick={handleSub}>-</button>
                </div>
            
            <div className="restaurant-container">
                {filteredData.slice(0,state.cardCount).map((resutrant)=>(<RestaurantCard  key={resutrant.info.id} props={resutrant}/>))}
                
                

                
        </div>
        </div>
    );
};

export default Body;