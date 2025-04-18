import { useEffect,useState } from "react"

const useOnlineStatus =() =>{

    //return boolean value of online status
    const[isOnline,setIsOnline]=useState(true);



    useEffect(() => {
        
        return () => {
        
            window.addEventListener("online", () => setIsOnline(true));
            window.addEventListener("offline", () => setIsOnline(false));
        };
        
    }, []);

    return isOnline;

}

export default useOnlineStatus;