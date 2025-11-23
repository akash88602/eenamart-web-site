import axios from "axios";
import React, { useState, useEffect } from "react";
import Pro from "./Pro";
import { useNavigate } from "react-router-dom";
const AddProducts = () => {
     const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        status: "",
        short_details: "",
        details: "",
        stock: ""
    });

    const [image, setImage] = useState(null); 
    const [categories, setCategories] = useState([]);

  
    useEffect(() => {
        axios.get("http://localhost:4400/categories-list")
            .then((res) => {
                
               
                setCategories(res.data)
            })
            .catch((err) => console.error(err));
    }, []);

   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

   
    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

  
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("name", product.name);
        formData.append("price", product.price);
        formData.append("category_id", product.category);
        formData.append("short_details", product.short_details);
        formData.append("details", product.details);
        formData.append("status", product.status);
        formData.append("stock", product.stock);

        if (image) formData.append("photo_featured", image); // important 🔥

        axios.post("http://localhost:4400/products-create", formData)
            .then((res) => {
                console.log("Product Added:", res.data);
                alert("Product added successfully!");
                setProduct({
                    name: "",
                    price: "",
                    category: "",
                    status: "",
                    short_details: "",
                    details: "",
                    stock: ""
                });
                setImage(null);
                 navigate("/admin/dashboard");
            })
            .catch((err) => console.error("Error adding product:", err));
    };

    const [cat, setCat] = useState([{ id: 1, name: "test" }, { id: 2, name: "new" }]);

    return (
        <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-2xl shadow">
            {cat.map((d, i) => (
                <div key={i} className="border-2 border-red-500 my-2 p-2 rounded">
                    <h1>{d.name}</h1>
                    <Pro id={d.id} />
                </div>
            ))}

            <h2 className="text-2xl font-semibold mb-6 text-center">Add New Product</h2>

            <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">

                <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        className="w-full border rounded-md p-2 focus:outline-none focus:ring-2"
                        required
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat, idx) => (
                            <option key={idx} value={cat.id}>{cat.title}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Name"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Price ($)</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter price"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Short Description</label>
                    <textarea
                        name="short_details"
                        value={product.short_details}
                        onChange={handleChange}
                        className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Short Description"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                        name="details"
                        value={product.details}
                        onChange={handleChange}
                        className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Description"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Photo</label>
                    <input
                        type="file"
                        name="photo_featured"
                        onChange={handleFileChange}
                        className="w-full border rounded-md p-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Status</label>
                    <input
                        type="text"
                        name="status"
                        value={product.status}
                        onChange={handleChange}
                        className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Status"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Stock</label>
                    <input
                        type="number"
                        name="stock"
                        value={product.stock}
                        onChange={handleChange}
                        className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Stock quantity"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProducts;
