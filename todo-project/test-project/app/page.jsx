"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="flex justify-center flex-col gap-4 items-center mt-7">
        <Input
        className="w-72"
        type="email"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <Button onClick={handleAddTask} className="bg-black text-white h-12">
        Add Tasks
      </Button>
 
      <ul className=" space-y-3">
        {tasks.map((task, index) => (
          <li 
            key={index}
            className="flex justify-between items-center bg-gray-50 p-2 rounded-md shadow-sm border border-gray-200 w-60 "
          >
            <span>{task}</span>
            <button
              onClick={() => handleRemoveTask(index)}
              className="ml-4 text-red-500 hover:text-red-700">
              Delete Me
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
