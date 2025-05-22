import React, { use } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { AuthContext } from '../provider/AuthContext';
import Loading from 'daisyui/components/loading';

const MainLayout = () => {

      const {loading} =use(AuthContext)
   if(loading){
        return null
    }
 
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
          <main className='flex-1'>
              <Outlet></Outlet>
          </main>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;