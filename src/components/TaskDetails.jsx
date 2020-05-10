import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as mutations from "../app/store/mutations";
function TaskDetails({
  id,
  groups,
  task,
  isComplete,
  setTaskCompletion,
  setTaskName,
  setTaskGroup,
}) {
  return (
    <div className="card col-6">
      <div>
        <input
          value={task.name}
          onChange={setTaskName}
          className="form-control form-control-lg mt-2"
        />
      </div>
      <div>
        <button
          className="btn btn-primary mt-2"
          onClick={() => setTaskCompletion(id, !isComplete)}
        >
          {isComplete ? "Reopen" : "Complete"}
        </button>
      </div>
      <div className="mt-3">
        <label htmlFor="Task Groups"></label>
        <select onChange={setTaskGroup} className="form-control">
          <option>Select Group</option>
          {groups.map((group) => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Link to="/dashboard">
          <button className="btn btn-primary mt-2">Done</button>
        </Link>
      </div>
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  const taskId = ownProps.match.params.id;
  const task = state.tasks.find((task) => task.id === taskId);
  const groups = state.groups;
  return {
    id: taskId,
    task,
    groups,
    isComplete: task.isComplete,
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  const id = ownProps.match.params.id;
  return {
    setTaskCompletion(id, isComplete) {
      dispatch(mutations.setTaskCompletion(id, isComplete));
    },
    setTaskName(e) {
      dispatch(mutations.setTaskName(id, e.target.value));
    },
    setTaskGroup(e) {
      dispatch(mutations.setGroupName(id, e.target.value));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);
