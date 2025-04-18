import React, { useEffect, useReducer, useState } from "react";
import RestaurantCard from "./Res-Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

// MUI imports
import {
  Box,
  Button,
  TextField,
  Stack,
  Container,
  Grid,
} from "@mui/material";

//Reducer Logic 
const reducer = (state, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      cardCount: Math.min(state.cardCount + 1, state.dataLength),
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      cardCount: Math.max(state.cardCount - 1, 0),
    };
  } else if (action.type === "setDataLength") {
    return {
      ...state,
      dataLength: action.payload,
    };
  } else {
    return state;
  }
};

const Body = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  //Initial state of Reducer
  const initialState = {
    cardCount: 8,
    dataLength: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // API Fetching Logic
  const fetchData = async () => {
    if (loading) return; // Prevent multiple API calls
    setLoading(true);

    try {
      const dataNew = await fetch(API_URL); // Fetch all data at once
      const jsonData = await dataNew.json();

      const restaurants =
        jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

      dispatch({
        type: `setDataLength`,
        payload: restaurants.length, // Set the total number of restaurants
      });

      setFilteredData(restaurants); // Store all restaurants
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Infinite Scroll Logic
  const handleAdd = () => {
    dispatch({ type: "increment" });
  };

  const handleSub = () => {
    dispatch({ type: "decrement" });
  };

  const filterTopRated = async () => {
    const dataNew = await fetch(API_URL);
    const jsonData = await dataNew.json();

    //Accessing data again
    const liveData =
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

    const newFilteredData = liveData.filter(
      (restaurant) => restaurant.info.avgRating > 4.2
    );

    setFilteredData(newFilteredData);
  };

  const handleSearch = () => {
    const newFilteredData = filteredData.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(newFilteredData);
  };

  //Conditional Rendering 
  // if(filteredData.length===0){
  //     return <Shimmer/>
  // }
  if (useOnlineStatus() === false) {
    return <div className="error">Please check your internet connection</div>;
  }

  return filteredData.length === 0 ? (
    <Shimmer />
  ) : (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box
        sx={{
          mb: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
        }}
      >
        {/* Search and Filters */}
        <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
          <TextField
            variant="outlined"
            placeholder="Search for Restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            size="small"
            sx={{ minWidth: 250 }}
          />
          <Button variant="outlined" onClick={handleSearch}>
            Search
          </Button>
          <Button variant="outlined" onClick={filterTopRated}>
            Top-Rated Restaurant
          </Button>
          <Button variant="outlined" onClick={fetchData}>
            All Restaurant
          </Button>
          <Button variant="outlined" onClick={handleAdd}>
            +
          </Button>
          <Button variant="outlined" onClick={handleSub}>
            -
          </Button>
        </Stack>
      </Box>

      {/* Restaurant Cards Grid */}
      <Grid container spacing={3}>
        {filteredData.slice(0, state.cardCount).map((restaurant) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={restaurant.info.id}>
            <Link
              to={"/restaurant/" + restaurant.info.id}
              style={{
                textDecoration: "none", // Remove underline
                color: "inherit", // Remove default blue color
              }}
            >
              <RestaurantCard props={restaurant} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Body;
