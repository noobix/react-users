import "./App.css";
import React from "react";
import Users from './components/Users'
import Form from './components/UsersForm'
import {v4 as uuid} from 'uuid'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        { id: uuid(), name: "Suzzy", email: "nanasu@email.com", gen: "18"},
        { id: uuid(), name: "Grant", email: "cgas@email.com", gen: "19" },
        { id: uuid(), name: "Sarah", email: "sgyau@email.com", gen: "20" },
        { id: uuid(), name: "Micheal", email: "mcquil@email.com", gen: "20" },
      ],
    };
  }

  addUser = (newUser) =>{
    this.setState({users: [...this.state.users, newUser]})
  }
  
  editUser = (id , newUser) => {
    const editUsers = this.state.users.map((user) => {
      if (user.id === id){
        return newUser;
      }
      return user
    });
    this.setState({users: editUsers})
  }

  deleteUser = (id) => {
    const filteredUsers = this.state.users.filter((user) => {
      if(user.id !== id)
      return user
    });
    this.setState({users: filteredUsers})
  }

  render(){
    return(<div>
    <Users users={this.state.users} editUser={this.editUser} deleteUser={this.deleteUser}/>
    <Form addUser={this.addUser} /></div>)}
  // render() {
  //   return (
  //     <React.Fragment>
  //       <h4>User list</h4>
  //       {this.props.users.map((user, index) => {
  //         return <div key={index}>
  //           <p>user.name</p>
  //           <p>user.email</p>
  //           <p>user.gen</p>
  //         </div>;
  //       })}
  //     </React.Fragment>
  //   );
  // }
}

export default App;
