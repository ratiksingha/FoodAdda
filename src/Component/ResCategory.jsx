import ItemList from "./ItemList";

const ResCatergory=({data})=>{
    
    return(
        <div>
           <div className="w-6/12 mx-auto bg-gray-50 shadow-lg rounded-lg p-4 m-2 ">
           <div className="justify-between flex items-center">
            <span className="font-bold text-md">{data.title} ({data.itemCards.length})</span>
            <span >⬇️</span>
           </div>
           <ItemList items={data.itemCards} />
           </div>
        </div>
    )
}

export default ResCatergory;