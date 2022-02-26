import React from "react";
import {v4 as uuid} from 'uuid'
import {AddUserAction}  from '../actions/Action'
import {connect} from 'react-redux'

class form extends React.Component{
    constructor(){
        super(); 
        this.state={ name:"", email: "", gen: ""};
    }
    handleNameChange = (e) =>{
        this.setState({name: e.target.value});
    }
    handleEmailChange = (e) =>{
        this.setState({email: e.target.value});
    }
    handleGenChange = (e) =>{
        this.setState({gen: e.target.value});
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        let newUser = {
            id: uuid(),
            name: this.state.name,
            email: this.state.email,
            gen: this.state.gen,
        }
        this.props.addUser(newUser);
        this.setState({name: "", email: "", gen: ""})
    }
    render(){
        return(<React.Fragment>
            <form onSubmit={this.handleSubmit}>
                <label name="label1">Name</label>
                <input name="name" type="text" placeholder="Name" 
                value={this.name} onChange={this.handleNameChange} />
                <label name="lable2">Email</label>
                <input name="email" type="text" placeholder="Email" 
                value={this.email} onChange={this.handleEmailChange} />
                <label name="label3">Gen</label>
                <input name="gen" type="text" placeholder="Gen Class" 
                value={this.gen} onChange={this.handleGenChange} />
                <input type="submit" name="submit" value="Submit" />
            </form>
        </React.Fragment>);
    }
}
//mapDispatchToProps
const sendActionAsProps = {addUser: AddUserAction}
export default connect(null,sendActionAsProps) (form)