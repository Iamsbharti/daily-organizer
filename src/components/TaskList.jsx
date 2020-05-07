import React from "react";
import { connect } from "react-redux";

function TaskList({ tasks, groupName }) {
  return (
    <div>
      <h1>{groupName}</h1>
      {tasks.map((task) => (
        <div key={task.id}>{task.name}</div>
      ))}
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
export default connect(mapStateToProps)(TaskList);
