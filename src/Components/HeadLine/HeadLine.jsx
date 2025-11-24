import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const HeadLine = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4400/menu-list')
            .then((res) => {
                // console.log(res)
                setMenu(res.data)
            })
    }, [])
    return (
        <div>
            <div className="w-full bg-error shadow-sm hidden lg:block lg:-mt-6 ">

                <div className="max-w-6xl mx-auto  ">
                 

                     <nav className="flex items-center justify-center h-11">
                    <ul className=" flex gap-8 text-white font-semibold text-[15px] ">
                        {
                            menu.map((d, i) => {
                                return (
                                    <li key={i}>
                                        <summary>
                                            <Link to={`/category/${d.id}`}>{d.title}</Link>
                                        </summary>
                                    </li>
                                )
                            })
                        }



                    </ul>
                    </nav>
                </div>

            </div>
        </div>
    );
};

export default HeadLine;