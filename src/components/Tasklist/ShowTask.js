import React from "react";

const ShowTask = ({ taskList, setTaskList, task, setTask }) => {


  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTaskList);
  }

  const handleEdit = (id) => {
    const taskToEdit = taskList.find((task) => task.id === id);
    setTask(taskToEdit);
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTaskList([])}>
          Clear All
        </button>
      </div>

      <ul>
        {taskList.map(({ id, name, date }) => (
          <li key={id}>
            <p>
              <span className="name">{name}</span>
              <span className="time">{date}</span>
            </p>
            <i className="bi bi-pencil-square" onClick={()=> handleEdit(id)}></i>
            <i className="bi bi-trash" onClick={()=> handleDelete(id)}></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
