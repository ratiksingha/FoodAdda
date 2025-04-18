
import React from 'react';
import useResMenu from '../utils/useResMenu'; // Custom hook to fetch restaurant menu data

import { useParams } from 'react-router-dom';
import { Box, Typography, List, ListItem, Card, CardContent, CardMedia } from '@mui/material';

const ResMenu = () => {
const { resId } = useParams(); // Access restaurant ID from URL
 
const menuData=useResMenu(resId);

  const restaurantInfo = menuData.restaurantInfo;
  const menuItems = menuData.menuItems;
 
  const { avgRating, name, imageUrl } = restaurantInfo || {};
  const restaurantName = name || "Loading...";

  return (
    <Box sx={{ padding: 2 }}>
      {/* Restaurant Info Card */}
      <Card sx={{ marginBottom: 3 }}>
        <CardMedia
          component="img"
          height="200"
          image={imageUrl || "https://via.placeholder.com/500x200"}
          alt={restaurantName}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {restaurantName}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Avg Rating: {avgRating}
          </Typography>
        </CardContent>
      </Card>

      {/* Menu Items Card */}
      <Typography variant="h6" gutterBottom>
        Menu Items:
      </Typography>
      <List>
        {menuItems?.slice(2).flatMap((item) => {
          const newdata = item.card.card.itemCards;
          return newdata?.map((newitem) => (
            <Card key={newitem?.card?.info?.id} sx={{ marginBottom: 2, width: '100%' }}>
              <CardContent>
                <Typography variant="h6">
                  {newitem?.card?.info?.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Price: ${(newitem?.card?.info?.price / 100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Category: {newitem?.card?.info?.category}
                </Typography>
              </CardContent>
            </Card>
          )) || [];
        })}
      </List>
    </Box>
  );
};

export default ResMenu;
