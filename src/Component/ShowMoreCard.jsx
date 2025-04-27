const ShowMoreCard =(props)=>{
    const {name, avgRating, cuisines, sla,cloudinaryImageId} =props.props.info;
    
        const {deliveryTime} = sla;
        
    
        return (
            
            <div className="restaurant-card">
                        
                        <div className="image">
                            <img src={IMG_CDN_URL+cloudinaryImageId} alt="no-image" />
                            </div>
                        <h2>{name}</h2>
                        <span>Rating:{avgRating}</span>
                        <span>{cuisines.join(",")}</span>
                        <span>Delivery Time:{ deliveryTime} mins</span>
                        </div>    
        );
}

export default ShowMoreCard;