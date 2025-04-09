import React, { useEffect,useReducer, useRef } from "react";
import "./css/Body.css";
import RestaurantCard from "./Res-Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



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
    const [restaurantData,setRestaurantData]=useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);

    const[searchText,setSearchText]=useState("");
    const loaderRef=useRef(null);
    

    const fetchData = async () => {
        if (loading) return; // Prevent multiple API calls
        setLoading(true);
        
        const dataNew = await fetch( API_URL);
        const jsonData = await dataNew.json();
        const length=jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.length;
        const resturants=jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        dispatch({
        type:`setDataLength`,
        payload:length
       })
        setFilteredData(resturants);
    };

    useEffect(() => {
        fetchData();
    }, []);

    
    const initialState={
        cardCount:6,
        dataLength:0
    }
    const [state,dispatch]=useReducer(reducer,initialState);

    // Infinite Scroll Logic
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    dispatch({ type: "increment", payload: 6 }); // Load 6 more cards
                }
            },
            { threshold: 1.0 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [loaderRef]);


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
                {filteredData.slice(0,state.cardCount).map((resutrant)=>
                (
                    <Link to={"/restaurant/"+resutrant.info.id} className="restaurant-link" key={resutrant.info.id}>
                    <RestaurantCard  key={resutrant.info.id} props={resutrant}/>
                    </Link>
                    )
                    
                    )
                    }
                
                

                
        </div>
        <div ref={loaderRef} style={{ height: "50px", margin: "10px 0" }}>
                <Shimmer />
            </div>
        </div>
    );
};

export default Body;