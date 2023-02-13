import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { statusFilters } from '../../redux/constants';
import { getTasks, getStatusFilter } from '../../redux/selectors';
import css from './TaskList.module.css';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const allTask = useSelector(getTasks);
  // console.log('allTask', allTask);

  const filterStatus = useSelector(getStatusFilter);
  // console.log('filterStatus', filterStatus);

  const filtredTasks = getVisibleTasks(allTask, filterStatus);
  // console.log('filtredTasks', filtredTasks);

  return (
    <ul className={css.list}>
      {filtredTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
