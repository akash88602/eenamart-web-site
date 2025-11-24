import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Navber = () => {
    
    return (  
        <div className=''>
              <div class="navbar  bg-base-100 shadow-md ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg> */}
                        </div>
                        <ul
                            tabindex="0"
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        
                        </ul>
                    </div>
                    <a class="">
                        <img src="/src/assets/eeeeeee-1736335799 (1).png" alt="" className='w:2/3' />
                    </a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        <li><a>

                            <select class="select select-neutral w-50">
                                <option disabled selected>ALL</option>
                                <option>North America</option>
                                <option>EU west</option>
                                <option>South East Asia</option>
                            </select>

                        </a></li>

                        <li><a className='w-full'>
                            <label class="input">
                                <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                        stroke-width="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input type="search" required placeholder="Search" />
                            </label>


                        </a></li>
                    </ul>
                </div>
                <div class="navbar-end gap-3">
                    <a class="btn btn-error">CART

                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                            <span className=" badge-sm indicator-item pb-">8</span>
                        </div>


                    </a>
                    <a class="btn btn-error">LOGING  / REGISTER</a>
                </div>
            </div>
        </div>
            
          
    );
};

export default Navber;
