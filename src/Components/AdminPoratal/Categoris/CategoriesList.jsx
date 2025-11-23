
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const CategoriesList = () => {
        const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4400/categories-list')
            .then((res) => {
                 console.log(res)
                setCategories(res.data)
            })
    },[]);
       const deleteCategories = (id) => {
        axios.delete(`http://localhost:4400/categories-delete/${id}`)
            .then((res) => {
                console.log(res)
                axios.get('http://localhost:4400/categories-list')
                    .then((res) => {
                        setCategories(res.data)
                     
                    })
            })
    }
    return (
        <div>
              <div>
            <div className="space-y-6">
                <div className='flex justify-between'>
                    <h1 className="text-3xl font-bold">Categories / ALL Categories List</h1>
                    <Link to="/admin/categories-create">
                        <button className='btn btn-success'> +  Add Categories</button></Link>
                </div>

                <div className="overflow-x-auto bg-white shadow rounded">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-gray-700 font-semibold">ID</th>
                                <th className="px-6 py-3 text-left text-gray-700 font-semibold">Title</th>
                                <th className="px-6 py-3 text-left text-gray-700 font-semibold">Slug</th>
                                <th className="px-6 py-3 text-left text-gray-700 font-semibold">menu</th>
                                <th className="px-6 py-3 text-left text-gray-700 font-semibold">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {categories.map((d, i) => (
                                <tr key={i} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">{d.id}</td>
                                    <td className="px-6 py-4">{d.title}</td>
                                    <td className="px-6 py-4">{d.slug}</td>
                                    <td className="px-6 py-4">{d.menu}</td>
                                  

                                
                                    <td>
                                        <NavLink to={`/admin/categories-update/${d.id}`} className="btn btn-sm btn-success"><FaRegEdit /></ NavLink>
                                        &nbsp;
                                        <a href="#" className="btn btn-sm btn-error" onClick={() =>deleteCategories(d.id)}  ><MdDeleteForever /></a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CategoriesList;