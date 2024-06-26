import PropTypes from 'prop-types';

function Todo({ index, todo, delTodo }) {
  const handleCheckboxChange = () => {
    alert('Thanks for completing the task!');
  };

  return (
    <div className="todo">
      <p>{todo}</p>
      <div className="action">
        <input type="checkbox" onChange={handleCheckboxChange} />
        <button onClick={() => delTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

Todo.propTypes = {
  index: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todo;
