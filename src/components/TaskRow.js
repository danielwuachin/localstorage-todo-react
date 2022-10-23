export const TaskRow = ({task, toggleTask}) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        {task.name}
        <input
          type="checkbox"
          value={task.done}
          onChange={() => toggleTask(task)}
          checked={task.done}
        />
      </td>
    </tr>
  );
};
