import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { CgMenuGridR } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import CategoriesList from './../AdminPoratal/Categoris/CategoriesList';
const AdminHeader = () => {
    return (
        <div>
            <>
                {/* Hello world */}
                <header className="bg-white shadow sticky  justify-between top-0 z-30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
                        <div className="flex items-center justify-between h-16">
                            {/* Left */}
                            <div className="flex items-center gap-3">
                                <button
                                    id="menu-btn"
                                    className="p-2 rounded-md hover:bg-slate-100 focus:outline-none lg:hidden"
                                >
                                    
                                </button>
                                <div class="dropdown">
                                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                                        <IoMenu />
                                    </div>
                                    <ul
                                        tabindex="-1"
                                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                        <li><a>Item 1</a></li>
                                    
                                        <li><a>Item 3</a></li>
                                    </ul>
                                </div>
                                <div className="text-2xl font-semibold">Admin Portal</div>
                            </div>
                            {/* Right */}
                            <div className="flex items-center gap-4">
                                <div className="hidden sm:flex items-center gap-3">
                                    <button className="px-3 py-1 rounded-md bg-slate-100">
                                        Notifications
                                    </button>
                                    <button className="px-3 py-1 rounded-md bg-slate-100">
                                        Settings
                                    </button>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-sm">Admin</div>
                                    <button className="p-2 rounded-md hover:bg-slate-100">
                                        <CgProfile />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Sidebar & Main */}
                <div className="flex">
                    {/* Sidebar */}
                    <aside
                        id="sidebar"
                        className="fixed inset-y-0 left-0 top-16 z-40 w-64 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 bg-white border-r shadow-md overflow-y-auto"
                    >
                        <div className="p-6">
                            <nav className="space-y-2">
                                <Link to='/admin/dashboard'
                                    href="#"
                                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100"
                                >
                                    <CgMenuGridR />
                                    <span>Dashboard </span>
                                </Link>
                                <Link to='/admin/productsadd'
                                    href="#"
                                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100"
                                >
                                     <CgProfile />
                                    <span>Add-Products</span>
                                </Link>
                                    <Link to='/admin/categories-list'
                                    href="#"
                                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100"
                                >
                                     <CgProfile />
                                    <span>CategoriesList</span>
                                </Link>
                                  
                                <Link to='/admin/categories-create'
                                    href="#"
                                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100"
                                >
                                     <CgProfile />
                                    <span>Add-Categories </span>
                                </Link>

                            </nav>
                        </div>
                    </aside>
                    {/* Main Content */}
                    <main className="flex-1 lg:ml-64 p-6 transition-all duration-300">
                        <Outlet></Outlet>
                    </main>
                </div>
            </>

        </div>
    );
};

export default AdminHeader;