import React from "react";
import { connect } from "react-redux";
function Dashboard({ groups }) {
  return (
    <div>
      <h3>DashBoard</h3>
      {groups.map((grp) => (
        <h4 key={grp.id}>{grp.name}</h4>
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
