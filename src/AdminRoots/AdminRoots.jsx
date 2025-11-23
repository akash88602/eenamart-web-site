import React from 'react';
import AdminNavber from '../Components/AdminNavber/AdminNavber';
import { Outlet } from 'react-router';

const AdminRoots = () => {
    return (
        <div className=' bg-gray-100'>
             
        {/* <AdminNavber /> */}
    
            {/* <main className='flex-1 p-6 overflow-auto   '>
              <Outlet></Outlet>
            </main> */}
           
        </div>
    );
};

export default AdminRoots;