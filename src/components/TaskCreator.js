import { useState } from "react";

/* podemos usar props.createnewtasks o llamarlo con llaves */
export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    /* ejecutar funcion del props pasandole el estado como parametro */
    createNewTask(newTaskName);

    /* guardar estado en localstorage */
    setNewTaskName("");
  };

  return (
    <form className="my-2 row" onSubmit={handleSubmit}>
      <div className="col-9">
        <input
          type="text"
          name=""
          placeholder="Enter new task"
          value={newTaskName}
          className="form-control"
          onChange={(e) => setNewTaskName(e.target.value)}
        />
      </div>
      <div className="col-3">
        {" "}
        <button className="btn btn-primary btn-sm">Save task</button>
      </div>
      
    </form>
  );
};
