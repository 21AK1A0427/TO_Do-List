
import Todo from './Todo';
import PropTypes from 'prop-types';

function MainTask({ todos, delTodo }) {
  return (
    <div className='task'>
      {todos.map((todo, index) => {
        return (
          <Todo key={index} index={index} todo={todo} delTodo={delTodo} />
        );
      })}
    </div>
  );
}

MainTask.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  delTodo: PropTypes.func.isRequired,};
export default MainTask;
