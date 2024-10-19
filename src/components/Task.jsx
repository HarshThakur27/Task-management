


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Task = ({ tasks, onEdit, onDelete }) => {
    const navigate = useNavigate();

    // Retrieve completed tasks from local storage (if any)
    const [completedTasks, setCompletedTasks] = useState(() => {
        const storedCompletedTasks = localStorage.getItem('completedTasks');
        return storedCompletedTasks ? JSON.parse(storedCompletedTasks) : [];
    });

    useEffect(() => {
        // Save completed tasks to local storage on any changes
        localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
    }, [completedTasks]);

    const handleEdit = (task) => {
        onEdit(task);
        navigate("/edit");
    };

    const handleMarkAsCompleted = (task) => {
        setCompletedTasks([...completedTasks, { ...task, status: 'Completed' }]);
        onDelete(task.id);  // Remove the task from the pending list
    };

    // Function to assign numerical values to priority for sorting
    const getPriorityValue = (priority) => {
        if (priority === "High") return 1;
        if (priority === "Medium") return 2;
        return 3;  // Low priority
    };

    // Sort tasks based on priority (High -> Medium -> Low)
    const sortedTasks = [...tasks].sort((a, b) => getPriorityValue(a.Priority) - getPriorityValue(b.Priority));

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Task List 
                </h1>
                {sortedTasks.length === 0 ? (
                    <p className="text-gray-600 text-center">No pending tasks available</p>
                ) : (
                    <div className="space-y-4">
                        {sortedTasks.map((task, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                <div className="mb-4 sm:mb-0">
                                    <p className="text-gray-700">
                                        <strong>Title :</strong> {task.Title}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Description:</strong> {task.Des}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Date:</strong> {task.Date}
                                    </p>
                                    <p className={`text-gray-700 ${task.Priority === "High" ? "text-red-500" : task.Priority === "Medium" ? "text-yellow-500" : "text-green-500"}`}>
                                        <strong>Priority:</strong> {task.Priority}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Status:</strong> Pending
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                                    <button
                                        onClick={() => handleEdit(task)}
                                        className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 w-full sm:w-auto"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => onDelete(task.id)}
                                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 w-full sm:w-auto"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleMarkAsCompleted(task)}
                                        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 w-full sm:w-auto"
                                    >
                                        Mark as Completed
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="text-center mt-6">
                    <Link to="/create">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 w-full sm:w-auto">
                            Add More
                        </button>
                    </Link>
                </div>
            </div>

            {/* Completed Tasks Section */}
            {completedTasks.length > 0 && (
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl mt-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        Completed Tasks
                    </h1>
                    <div className="space-y-4">
                        {completedTasks.map((task, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <div>
                                    <p className="text-gray-700">
                                        <strong>Title :</strong> {task.Title}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Description:</strong> {task.Des}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Date:</strong> {task.Date}
                                    </p>
                                    <p className={`text-gray-700 ${task.Priority === "High" ? "text-red-500" : task.Priority === "Medium" ? "text-yellow-500" : "text-green-500"}`}>
                                        <strong>Priority:</strong> {task.Priority}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Status:</strong> Completed
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Task;
