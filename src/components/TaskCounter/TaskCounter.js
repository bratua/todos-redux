import { useSelector } from 'react-redux';
import css from './TaskCounter.module.css';
import { getTasks } from '../../redux/selectors';

export const TaskCounter = () => {
  const tasks = useSelector(getTasks);
  const counter = tasks.reduce(
    (acc, task) => {
      task.completed ? (acc.completed += 1) : (acc.active += 1);
      return acc;
    },

    { completed: 0, active: 0 }
  );

  // console.log('counter', counter);
  return (
    <div>
      <p className={css.text}>Active: {counter.active}</p>
      <p className={css.text}>Completed: {counter.completed}</p>
    </div>
  );
};
