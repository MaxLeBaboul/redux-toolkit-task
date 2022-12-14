import TaskItem from "./TaskItem";
import { useSelector } from "react-redux/es/exports";
const TasksList = (props) => {
  const tasks = useSelector((state) => state.todo);
  return (
    <>
      {tasks.map((t) => (
        <TaskItem task={t} key={t.id} />
      ))}
    </>
  );
};

export default TasksList;
