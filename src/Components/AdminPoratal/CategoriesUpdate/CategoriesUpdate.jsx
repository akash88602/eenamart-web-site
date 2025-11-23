import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const CategoriesUpdate = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [menu, setMenu] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4400/categories-edit/${id}`)
            .then(res => {
                const data = res.data;
                setTitle(data.title);
                setSlug(data.slug);
                setMenu(data.menu);
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }, [id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:4400/categories-update/' + id, { id, title, slug, menu })
            .then(res => {
                console.log(res)
                navigate('/admin/categories-list')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-2xl shadow">
                <h2 className="text-2xl font-semibold mb-6 text-center">Categories Update</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Title</label>
                        <input
                            type="text"
                            onChange={e => setTitle(e.target.value)}
                            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="title"
                            value={title}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Slug</label>
                        <input
                            type="text"

                            onChange={e => setSlug(e.target.value)}
                            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="slug"
                            value={slug}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Menu</label>
                        <input
                            type="text"

                            onChange={e => setMenu(e.target.value)}
                            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="menu"
                            value={menu}
                        />
                    </div>




                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CategoriesUpdate;