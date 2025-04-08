import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './src/Component/About';


// Header
// - Logo
// - Nav Items

// Body
// - Search
// - Restaurant Container
//  - Restaurant Card
//  - Dish Name
//  - Image
//  - Restaurant Name
//  - Rating
//  - Cuisines
//  - Time to Deliver

// Footer
// - Copyright
// - Links
// - Address
// - Contact 




    const router = createBrowserRouter([
      {
        path: '/',
        element: <App />
      },
      {
        path: '/about',
        element: <About />
      }
    ]);
   


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
    < RouterProvider router={router} />
   </React.StrictMode>
 );