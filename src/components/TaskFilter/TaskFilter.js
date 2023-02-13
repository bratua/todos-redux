import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import { setStatusFilter } from '../../redux/actions';
import { Button } from 'components/Button/Button';
import { getStatusFilter } from '../../redux/selectors';
import css from './TaskFilter.module.css';

export const TaskFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
    <div className={css.wrapper}>
      <Button
        onClick={() => handleFilterChange(statusFilters.all)}
        selected={filter === statusFilters.all}
      >
        All
      </Button>
      <Button
        onClick={() => handleFilterChange(statusFilters.active)}
        selected={filter === statusFilters.active}
      >
        Active
      </Button>
      <Button
        onClick={() => handleFilterChange(statusFilters.completed)}
        selected={filter === statusFilters.completed}
      >
        Completed
      </Button>
    </div>
  );
};
