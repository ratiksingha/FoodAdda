import { useState, useEffect } from "react";


const DEFAULT_LOCATION = {lat : 30.7333148, lng: 76.7794179};

const useLocation=() => {

const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        setError("Unable to retrieve location.");
        setLocation(DEFAULT_LOCATION);
      }
    );
  }, []);

  return { location, error };
};

export default useLocation;