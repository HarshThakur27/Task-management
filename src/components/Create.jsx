
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = ({ addTask }) => {
    const [task, setTask] = useState({ Title: "", Des: "", Date: "", Priority: "Medium" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        navigate('/task');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create Task</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Title</label>
                        <input
                            type="text"
                            name="Title"
                            value={task.Title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Description</label>
                        <input
                            type="text"
                            name="Des"
                            value={task.Des}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Date</label>
                        <input
                            type="date"
                            name="Date"
                            value={task.Date}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>

                    {/* Priority Section */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Priority</label>
                        <div className="flex space-x-4">
                            <label>
                                <input
                                    type="radio"
                                    name="Priority"
                                    value="High"
                                    checked={task.Priority === "High"}
                                    onChange={handleChange}
                                />
                                High
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Priority"
                                    value="Medium"
                                    checked={task.Priority === "Medium"}
                                    onChange={handleChange}
                                />
                                Medium
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Priority"
                                    value="Low"
                                    checked={task.Priority === "Low"}
                                    onChange={handleChange}
                                />
                                Low
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Create;
