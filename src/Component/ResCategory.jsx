import ItemList from "./ItemList";
import { useState } from "react";

const ResCatergory=({data})=>{

    const[showItems, setShowItems]=useState(false);

    const handleClick=()=>{
       setShowItems(!showItems);
    }
    
    return(
        <div>
           <div className="w-6/12 mx-auto bg-gray-50 shadow-lg rounded-lg p-4 m-2 ">
           <div className="justify-between flex items-center cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-md">{data.title} ({data.itemCards.length})</span>
            <span >{showItems?"⬆️":"⬇️"}</span>
           </div>
           {showItems && <ItemList items={data.itemCards} />}
           </div>
        </div>
    )
}

export default ResCatergory;