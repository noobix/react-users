import React from "react";
import { connect } from "react-redux";
import User from './Item'

class userList extends React.Component {
  render() {
      return(
        <React.Fragment>
        <h4>User list</h4>
        {this.props.users.map((user, index) => {
          return<User key={`${index} - ${user.name}`} user= {user}/>
        //   return(<div key= {user.id}>
        //     <Item user= {user} editUser= {this.props.editUser} 
        //     deleteUser={this.props.deleteUser} />
        //     <div key={index}>
        //     <p>{user.name}</p>
        //     <p>{user.email}</p>
        //     <p>{user.gen}</p>
        //     <hr/>
        // </div>);
        })}
      </React.Fragment>
      )
  }
}
//mapStateToProps
const sendDataAsProps = (state) => {
  return {state: state, users: state.users}
}
export default connect(sendDataAsProps) (userList);
