import React, { useEffect, useReducer, useState, lazy, Suspense } from "react";
import RestaurantCard, { isTopRestaurant } from "./Res-Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { getApiUrl , IMG_CDN_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import useLocation from "../utils/useLocation";

const LazyRestaurantCard = lazy(() => import("./Res-Card"));

const initialState = {
  cardCount: 8,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, cardCount: state.cardCount + 4 };
    case "decrement":
      return { ...state, cardCount: Math.max(state.cardCount - 4, 4) };
    default:
      return state;
  }
};

const Body = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { location } = useLocation();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (location.lat && location.lng) {
      fetchData();
    }
    // eslint-disable-next-line
  }, [location]);

  const fetchData = async () => {
    if (loading) return;
    if (!location.lat || !location.lng) return;
    setLoading(true);
    try {
      const response = await fetch(getApiUrl(location.lat, location.lng));
      const jsonData = await response.json();
      const restaurants =
        jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants || [];
      setFilteredData(restaurants);
      setAllData(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const TopRestaurantCard = isTopRestaurant(RestaurantCard);

  const filterTopRated = () => {
    const newFilteredData = allData.filter(
      (restaurant) => restaurant.info.avgRating > 4.2
    );
    setFilteredData(newFilteredData);
  };

  const handleSearch = () => {
    const newFilteredData = allData.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(newFilteredData);
  };

  if (!useOnlineStatus()) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl text-red-600 font-semibold">
        Please check your internet connection
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pb-28 bg-[#f5f3ee] min-h-screen">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row items-center gap-3 justify-between mt-8 mb-6">
        <div className="flex gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search for Restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="flex gap-2 mt-3 md:mt-0">
          <button
            className="bg-gray-100 hover:bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-semibold border border-orange-200 transition"
            onClick={filterTopRated}
          >
            Top Rated
          </button>
          <button
            className="bg-gray-100 hover:bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-semibold border border-orange-200 transition"
            onClick={fetchData}
          >
            All Restaurants
          </button>
        </div>
      </div>

      {/* Restaurant Cards Grid */}
      {loading ? (
        <Shimmer />
      ) : (
        <>
          {filteredData.length === 0 ? (
            <div className="flex justify-center items-center h-64 text-gray-400 text-lg">
              No restaurants found.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredData.slice(0, state.cardCount).map((restaurant) => (
                <Link
                  to={"/restaurant/" + restaurant.info.id}
                  key={restaurant.info.id}
                  className="hover:no-underline"
                >
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-200 border border-gray-100 flex flex-col overflow-hidden group h-full">
                    <div className="relative">
                      <img
                        src={
                          restaurant.info.cloudinaryImageId
                            ? IMG_CDN_URL + restaurant.info.cloudinaryImageId
                            : "https://via.placeholder.com/400x300?text=No+Image"
                            }
                        alt={restaurant.info.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                        loading="lazy"
                      />
                      {restaurant.info.avgRating >= 4.6 && (
                        <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                          ⭐ Top Rated
                        </span>
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{restaurant.info.name}</h3>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="mr-2 font-bold text-green-600">
                          {restaurant.info.avgRating}★
                        </span>
                        <span>•</span>
                        <span className="ml-2">{restaurant.info.sla?.slaString || "30 MINS"}</span>
                        <span>•</span>
                        <span className="ml-2">{restaurant.info.costForTwo || "₹200 for two"}</span>
                      </div>
                      <div className="text-xs text-gray-400 line-clamp-2">
                        {restaurant.info.cuisines?.join(", ")}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Show More Button */}
          {filteredData.length > state.cardCount && (
            <div className="flex justify-center mt-8">
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-lg font-semibold shadow transition"
                onClick={() => dispatch({ type: "increment" })}
              >
                Show More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Body;