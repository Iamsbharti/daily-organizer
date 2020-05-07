import React from "react";
import { connect } from "react-redux";
import { requestTaskCreate } from "../app/store/mutations";
function TaskList({ tasks, groupName, id, createNewTask }) {
  return (
    <div>
      <h4>{groupName}</h4>
      {tasks.map((task) => (
        <div key={task.id}>
          {task.name} - {task.id}
        </div>
      ))}
      <button className="btn btn-info" onClick={() => createNewTask(id)}>
        Add Task
      </button>
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  const groupId = ownProps.id;
  return {
    groupName: ownProps.name,
    id: groupId,
    tasks: state.tasks.filter((task) => task.group === groupId),
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    createNewTask(id) {
      console.log(`new task ${id}`);
      dispatch(requestTaskCreate(id));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
