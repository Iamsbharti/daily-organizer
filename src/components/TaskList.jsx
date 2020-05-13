import React from "react";
import { connect } from "react-redux";
import { requestTaskCreate } from "../app/store/mutations";
import { Link } from "react-router-dom";
function TaskList({ tasks, groupName, id, createNewTask, userId }) {
  return (
    <div className="card p-2 m-2">
      <h4>{groupName}</h4>
      {tasks.map((task) => (
        <Link to={`/task/${task.id}`} key={task.id}>
          <div className="card p-3 mt-2">{task.name}</div>
        </Link>
      ))}
      <button
        className="btn btn-primary btn-block mt-2"
        onClick={() => createNewTask(id, userId)}
      >
        Add Task
      </button>
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  const groupId = ownProps.id;
  const userId = ownProps.userId;
  return {
    groupName: ownProps.name,
    id: groupId,
    userId,
    tasks: state.tasks.filter((task) => task.group === groupId),
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    createNewTask(id, userId) {
      console.log(`new task ${id} for user${userId}`);
      dispatch(requestTaskCreate(id, userId));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
