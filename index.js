import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Header from './src/component/Header';
import Footer from './src/component/Footer';

import Body from './src/component/Body';
import About from './src/component/About';
import Contact from './src/component/ContactCBC';
import ResMenu from './src/component/ResMenu';
import './index.css';

import Order from './src/component/Order';


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


const App=()=>
   (
    <div className='App'>
      <div className='App-header'>
        <Header/>
        </div>
        <div className='App-body'>
        <Outlet/>
        </div>
      <div className='App-footer'>
        <Footer/>
      </div>
    </div>
    );

    const router = createBrowserRouter([
      {
        path: '/',
        element: <App />,
        children: [
          {
            path: '/',
            element:<Body/>
          },
          {
            path: '/about',
            element: <About />
          },
          {
            path: '/contact',
            element: <Contact />
            
          },
          {
            path:'/restaurant/:resId',
            element:<ResMenu/>
          },
          {
            path:'/order',
            element:<Order/>
          }
        ]
      }
      
    ]);
   


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
    <RouterProvider router={router}/>
   </React.StrictMode>
 );