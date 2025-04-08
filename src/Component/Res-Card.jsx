import React from 'react';
import "./css/Res-Card.css";
const RestaurantCard = (props) => {


   
    const {name, avgRating, cuisines, sla,cloudinaryImageId} =props.props.info;

    const {deliveryTime} = sla;
    

    return (
        
        <div className="restaurant-card">
                    
                    <div className="image">
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="no-image" />
                        </div>
                    <h2>{name}</h2>
                    <span>Rating:{avgRating}</span>
                    <span>{cuisines.join(",")}</span>
                    <span>Delivery Time:{ deliveryTime} mins</span>
                    </div>    
    );
};

export default RestaurantCard;