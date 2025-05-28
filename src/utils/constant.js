

// export const API_URL="https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const IMG_CDN_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const RESTAURANT_CDN_URL="https://www.swiggy.com/dapi/res-logo/";
export const MENU_API_URL="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=";
export const getApiUrl = (lat, lng) =>
  `https://fa-proxy-three.vercel.app/api/swiggy?lat=${lat}&lng=${lng}`;

export const getMenuApiUrl = (resId,lat,lng) =>`
  https://fa-proxy-three.vercel.app/api/menu?lat=${lat}&lng=${lng}&restaurantId=${resId}
`;
