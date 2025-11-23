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
            <div className="navbar lg:bg-error lg:shadow-sm mb-5 ">

                <div className="navbar-center text-center hidden lg:flex  rounded-box z-1  ">
                    <ul className="menu menu-horizontal px-10 gap-20 text-xl ">
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
                </div>

            </div>
        </div>
    );
};

export default HeadLine;