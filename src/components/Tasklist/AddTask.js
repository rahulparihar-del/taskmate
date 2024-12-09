import React from "react";

const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if Task is Being Updated
    if (task.id) {
      const date = new Date();
      const updatedTaskList = taskList.map((item) =>
        item.id === task.id
          ? {
              id: task.id,
              name: task.name,
              date: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : item
      );
      setTaskList(updatedTaskList);
      setTask({});

    } else {
      if (e.target.task.value.trim() === "") {
        alert("Task name cannot be empty");
        return;
      }

      const date = new Date();
      const newTask = {
        id: Math.floor(Math.random() * 10000),
        name: e.target.task.value,
        date: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };

      setTaskList([...taskList, newTask]);
      setTask({});
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          value={task.name || ""}
          type="text"
          placeholder="Add Task"
          name="task"
          autoComplete="off"
          maxLength="25"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? "Update" : "Add Task"}</button>
      </form>
    </section>
  );
};

export default AddTask;
