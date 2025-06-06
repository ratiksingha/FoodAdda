import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Header from './src/Component/Header';
import Footer from './src/Component/Footer';

import Body from './src/Component/Body';
import About from './src/Component/About';
import Contact from './src/Component/ContactCBC';
import ResMenu from './src/Component/ResMenu';
import './index.css';
import Checkout from './src/Component/CheckOut';
import Cart from './src/Component/Cart';
import { Provider } from 'react-redux';
import appStore from './src/redux/appStore';






const App=()=>
   (
    <Provider store={appStore}>
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
     </Provider>
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
            path:'/cart',
            element:<Cart/>
          },

          {
            path :'/checkout',
            element:<Checkout/>
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