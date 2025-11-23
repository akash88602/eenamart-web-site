import React from 'react';
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router';
const AdminNavber = () => {
    return (
        <div>
            <div className="bg-slate-50 text-slate-800">
                {/*Herder for admin portal*/}
                <header className="bg-white shodow sticky top-0 z-30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center  justify-between h-16">
                            <div className="flex items-center gap-3">
                                <div className=" dropdown">
                                    <button
                                        className="p-2 rounded-md hover:bg-slate-50 focus:outline lg:hidden"
                                        aria-label="Toggle sideber"
                                    >
                                        <IoMenu />
                                    </button>
                                    <ul
                                        tabIndex={0}
                                        className=" menu-sm dropdown-content bg-slate-100  z-1 mt-3  w-52 p-2 shadow rounded-md hover:bg-slate-100 "
                                    >
                                        <li>
                                            <a>Homepage</a>
                                        </li>
                                        <li>
                                            <a>Portfolio</a>
                                        </li>
                                        <li>
                                            <a>About</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-2xl font-semibold">Admin Portal</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="hidden sm:flex items-center gap-3">
                                    <button className="px-3 py-1 rounded-md bg-slate-100">
                                        Natifications
                                    </button>
                                    <button className="px-3 py-1 rounded-md bg-slate-100">
                                        Settingas
                                    </button>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-sm ">Admin</div>
                                    <button className="p-2 rounded-md hover:bg-slate-100">
                                       <CgProfile />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/*Sideber for admin portal*/}
                <div className="flex  ">
                    <aside className="fixed inset-y-0  top-16 z-40 w-64 transform lg:translate-x-0 transition-transform duration-300 bg-white border-r shadow-md overflow-y-auto -translate-x-full">
                        <div className="p-6 ">
                            <nav className="spacae-y-2 ">
                                <Link  to='dashboard' className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100">
                               <IoMenu />
                                    <span>Dashboard</span>
                                </Link >
                                <Link  to= 'users' className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100">
                                    <CgProfile />
                                    <span>Users</span>
                                </Link >
                            </nav>
                        </div>
                    </aside>
                </div>
            </div>

        </div>
    );
};

export default AdminNavber;