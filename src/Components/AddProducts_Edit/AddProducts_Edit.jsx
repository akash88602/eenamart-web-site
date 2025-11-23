import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddProducts_Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category_id: "",
        short_details: "",
        details: "",
        status: "",
        stock: "",
        photo_featured: null, // file
    });

    const [preview, setPreview] = useState(null); // image preview
    const [categories, setCategories] = useState([]);

    // Load product data
    useEffect(() => {
        axios.get(`http://localhost:4400/products-single/${id}`)
            .then(res => {
                const data = res.data;
                setFormData({
                    name: data.name,
                    price: data.price,
                    category_id: data.category_id,
                    short_details: data.short_details,
                    details: data.details,
                    status: data.status,
                    stock: data.stock,
                    photo_featured: null
                });
                setPreview(`http://localhost:4400/uploads/${data.photo_featured}`);
            })
            .catch(err => console.error(err));
    }, [id]);

    // Load categories
    useEffect(() => {
        axios.get('http://localhost:4400/categories-list')
            .then(res => setCategories(res.data));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, photo_featured: file });
        if (file) setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();

        data.append("name", formData.name);
        data.append("price", formData.price);
        data.append("category_id", formData.category_id);
        data.append("short_details", formData.short_details);
        data.append("details", formData.details);
        data.append("status", formData.status);
        data.append("stock", formData.stock);

        if (formData.photo_featured) {
            data.append("photo_featured", formData.photo_featured);
        }

        axios.put(`http://localhost:4400/products-update/${id}`, data, {
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(() => {
                alert("Product updated successfully!");
                navigate("/admin/dashboard");
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="p-8 bg-white rounded shadow-md max-w-3xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Product (ID: {id})</h2>
            <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">

                <div>
                    <label className="block font-semibold mb-1">Category</label>
                    <select
                        name="category_id"
                        value={formData.category_id}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                    >
                        <option value="">Select Category</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.title}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-semibold mb-1">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Price</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Short Details</label>
                    <textarea name="short_details" value={formData.short_details} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Details</label>
                    <textarea name="details" value={formData.details} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Photo</label>
                    {preview && <img src={preview} alt="Preview" className="w-32 h-32 object-cover mb-2 border rounded" />}
                    <input type="file" name="photo_featured" onChange={handleFileChange} className="w-full border px-3 py-2 rounded" />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Status</label>
                    <input type="text" name="status" value={formData.status} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Stock</label>
                    <input type="number" name="stock" value={formData.stock} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
                </div>

                <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Update Product</button>
            </form>
        </div>
    );
};

export default AddProducts_Edit;
