import PropTypes from 'prop-types';

function Todo({ index, todo, delTodo }) {
  const handleCheckboxChange = () => {
    alert('Thanks for completing the task!');
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm('Have you completed this task? Press OK to delete.');
    if (confirmDelete) {
      delTodo(index);
    }
  };

  return (
    <div className="todo">
      <p>{todo}</p>
      <div className="action">
        <input type="checkbox" onChange={handleCheckboxChange} />
        <button onClick={handleDelete}>Delete</button>
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
