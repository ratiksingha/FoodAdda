import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './src/Component/Header';
import Footer from './src/Component/Footer';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Body from './src/Component/Body';
import About from './src/Component/About';
import Contact from './src/Component/Contact';
import ResMenu from './src/Component/ResMenu';


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