import React from "react";

class userList extends React.Component {
  render() {
      return(
        <React.Fragment>
        <h4>User list</h4>
        {this.props.users.map((user, index) => {
          return <div key={index}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.gen}</p>
            <hr/>
          </div>;
        })}
      </React.Fragment>
      )
  }
}
export default userList;
