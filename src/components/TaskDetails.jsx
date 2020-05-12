import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as mutations from "../app/store/mutations";
function TaskDetails({
  id,
  groups,
  task,
  isComplete,
  content,
  comment_id,
  setTaskCompletion,
  setTaskName,
  setTaskGroup,
  setComments,
  addComments,
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
          className="btn btn-primary mt-3 ml-1"
          onClick={() => setTaskCompletion(id, !isComplete)}
        >
          {isComplete ? "Reopen" : "Complete"}
        </button>
      </div>
      <div className="mt-3">
        {content ? (
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setComments(e.target.value, comment_id)}
          />
        ) : (
          <button className="btn btn-link" onClick={addComments}>
            Add Comments
          </button>
        )}
      </div>
      <div className="mt-3">
        <label htmlFor="Task Groups"></label>
        <select
          onChange={setTaskGroup}
          value={task.group}
          className="form-control"
        >
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
  const userId = ownProps.userId;
  const task = state.tasks.find((task) => task.id === taskId);
  const groups = state.groups;
  const comments = state.comments.find(
    (comment) => comment.owner === userId && comment.task === taskId
  );
  //condition check for undefined comments
  if (comments !== undefined) {
    console.log("def");
    var content = comments.content;
    var comment_id = comments.id;
  } else {
    console.log("undef");
    content = "";
  }
  console.log("final_val", content);
  return {
    id: taskId,
    task,
    groups,
    isComplete: task.isComplete,
    content,
    comment_id,
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  const id = ownProps.match.params.id;
  const userId = ownProps.userId;
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
    setComments(value, comment_id) {
      dispatch(mutations.setComments(id, value, userId, comment_id));
    },
    addComments(e) {
      dispatch(mutations.addComments(id, userId));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);
