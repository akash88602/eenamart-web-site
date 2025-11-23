import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const Dashdroard = () => {
    const [protucts, setProduct] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4400/products-list')
            .then((res) => {
                // console.log(res)
                setProduct(res.data)
            })
    },[])
       const deleteProduct = (id) => {
        axios.delete(`http://localhost:4400/products-delete/${id}`)
            .then((res) => {
                console.log(res)
                axios.get('http://localhost:4400/products-list')
                    .then((res) => {
                         
                        setProduct(res.data)
                     
                    })
            })
    }
    return (
        <div>
            <div className="space-y-6">
                <div className='flex justify-between'>
                    <h1 className="text-3xl font-bold">Dashdroard / ALL Products List</h1>
                    <Link to="/admin/productsadd">
                        <button className='btn btn-success'>Products-add</button></Link>
                </div>

                <div className="overflow-x-auto bg-white shadow rounded">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-gray-700 font-semibold">ID</th>
                                <th className="px-6 py-3 text-left text-gray-700 font-semibold">photo</th>
                                <th className="px-6 py-3 text-left text-gray-700 font-semibold">Category</th>
                                <th className="px-6 py-3 text-left text-gray-700 font-semibold">Price</th>
                                   <th className="px-6 py-3 text-left text-gray-700 font-semibold">stock</th>
                                <th className="px-6 py-3 text-left text-gray-700 font-semibold">Status</th>
                             
                                <th className="px-6 py-3 text-left text-gray-700 font-semibold">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {protucts.map((d, i) => (
                                <tr key={i} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">{d.id}</td>
                                    <td className="px-6 py-4">
                                        <img src={`http://localhost:4400/uploads/${d.photo_featured}`} alt="" width={50}/>
                                        </td>
                                    <td className="px-6 py-4">{d.category}</td>
                                    <td className="px-6 py-4">{d.price}</td>
                                    <td className="px-6 py-4">{d.stock}</td>

                                    <td className={`px-6 py-4 font-semibold ${d.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                                        {d.status}
                                    </td>
                                    <td>
                                        <NavLink to={`/admin/product-update/${d.id}`} className="btn btn-sm btn-success"><FaRegEdit /></ NavLink>
                                        &nbsp;
                                        <a href="#" className="btn btn-sm btn-error" onClick={() => deleteProduct(d.id)} ><MdDeleteForever /></a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashdroard;