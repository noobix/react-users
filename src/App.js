import "./App.css";
import React from "react";
import Users from './components/Users'
import Form from './components/UsersForm'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        { name: "Suzzy", email: "nanasu@email.com", gen: "18" },
        { name: "Grant", email: "cgas@email.com", gen: "19" },
        { name: "Sarah", email: "sgyau@email.com", gen: "20" },
        { name: "Micheal", email: "mcquil@email.com", gen: "20" },
      ],
    };
  }

  addUser = (newUser) =>{
    this.setState({users: [...this.state.users, newUser]})
  }

  render(){return(<div><Users users={this.state.users} /><Form addUser={this.addUser} /></div>)}
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
