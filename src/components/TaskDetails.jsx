import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as mutations from "../app/store/mutations";
function TaskDetails({ id, groups, task, isComplete, setTaskCompletion }) {
  return (
    <div>
      <div>
        <input value={task.name} />
      </div>
      <div>
        <button
          className="btn btn-info"
          onClick={() => setTaskCompletion(id, !isComplete)}
        >
          {isComplete ? "Reopen" : "Complete"}
        </button>
      </div>
      <div>
        <label htmlFor="Task Groups"></label>
        <select>
          {groups.map((group) => (
            <option key={group.id}>{group.name}</option>
          ))}
        </select>
      </div>
      <div>
        <Link to="/dashboard">
          <button>Done</button>
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
  return {
    setTaskCompletion(id, isComplete) {
      dispatch(mutations.setTaskCompletion(id, isComplete));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);
