
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Edit = ({ task, editTask }) => {
    const [updatedTask, setUpdatedTask] = useState(task);
    const navigate = useNavigate();

    useEffect(() => {
        if (task) {
            setUpdatedTask(task);
        }
    }, [task]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedTask({ ...updatedTask, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(updatedTask);
        navigate('/task');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Edit Task</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Title</label>
                        <input
                            type="text"
                            name="Title"
                            value={updatedTask.Title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Description</label>
                        <input
                            type="text"
                            name="Des"
                            value={updatedTask.Des}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Date</label>
                        <input
                            type="date"
                            name="Date"
                            value={updatedTask.Date}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                        Update Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Edit;
