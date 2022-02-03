import React from "react";
import Item from './Item'

class userList extends React.Component {
  render() {
      return(
        <React.Fragment>
        <h4>User list</h4>
        {this.props.users.map((user, index) => {
          return(<div key= {user.id}>
            <Item user= {user} editUser= {this.props.editUser} 
            deleteUser={this.props.deleteUser} />
            {/*<div key={index}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.gen}</p>
            <hr/>*/}
        </div>);
        })}
      </React.Fragment>
      )
  }
}
export default userList;
