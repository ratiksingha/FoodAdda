import React from 'react';
import "./css/Res-Card.css";
import { IMG_CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {


   
    const {name, avgRating, cuisines, sla,cloudinaryImageId} =props.props.info;

    const {deliveryTime} = sla;
    

    return (
        
        <div className="restaurant-card bg-white shadow-lg rounded-lg p-4 m-2">
                    
                    <div className="image-container">
                        <img src={IMG_CDN_URL+cloudinaryImageId} alt="no-image" />
                        </div>
                    <h2 className="font-bold">{name}</h2>
                    <span>Rating:{avgRating}</span>
                    <span>{cuisines.join(",")}</span>
                    <span>Delivery Time:{ deliveryTime} mins</span>
                    </div>    
    );
};

export const isTopRestaurant = (RestaurantCard) => {
    return (props) => {
        return (
            <div style={{ position: "relative" }}>
                <span
                    style={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        background: "gold",
                        color: "#333",
                        padding: "4px 12px",
                        borderRadius: "1px",
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        zIndex: 2,
                        letterSpacing: "1px"
                    }}
                >
                    ⭐ Top Rated
                </span>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;