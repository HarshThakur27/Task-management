This website allows users to manage tasks with functionalities such as adding, editing, deleting, and marking tasks as completed. It sorts tasks dynamically by priority (high, medium, low) and features a responsive design.


Features
Add, Edit, and Delete Tasks: Users can create tasks with a title, description, and priority, edit them, or delete them.
Mark Tasks as Completed: Users can toggle tasks between pending and completed states.
Dynamic Sorting: Tasks are sorted by priority (High, Medium, Low) with high-priority tasks appearing at the top.
Responsive Design: The application is styled using Tailwind CSS to ensure a good user experience on various devices.
Local Storage: Tasks are saved in local storage, allowing them to persist between page reloads.


Setup Instructions
To run this project locally, follow these steps:

Clone the repository:
git clone https://github.com/HarshThakur27/Task-management.git

Navigate to the project directory:
cd taskmanagement

Install the necessary dependencies:
npm install

Start the application:
npm start

Visit the app 
https://task-management-orpin-nu.vercel.app/


Sorting Tasks by Priority
The tasks are sorted dynamically based on their priority level: High, Medium, and Low. The sorting is done in the following way:

High Priority tasks are assigned the highest value and appear at the top.
Medium Priority tasks come after high-priority tasks.
Low Priority tasks are displayed last.

This sorting is achieved using a custom function that assigns numerical values to priorities and sorts the tasks array accordingly:

const getPriorityValue = (priority) => {
    if (priority === "High") return 1;
    if (priority === "Medium") return 2;
    return 3;  // Low priority
};

const sortedTasks = tasks.sort((a, b) => getPriorityValue(a.priority) - getPriorityValue(b.priority));
