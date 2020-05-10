import React from "react";
import { connect } from "react-redux";
import TaskList from "./TaskList";
function Dashboard({ groups }) {
  return (
    <div className="row">
      {groups.map((group) => (
        <TaskList
          key={group.id}
          name={group.name}
          id={group.id}
          className="col"
        />
      ))}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    groups: state.groups,
  };
}
export default connect(mapStateToProps)(Dashboard);
