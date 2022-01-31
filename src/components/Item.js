import React from 'react'
import {Button, Modal} from 'react-bootstrap'

class Item extends React.Component{
    constructor(props){
        super(props);
        // this.state.id = this.props.id;
        // this.state.username = this.props.user.name
        // this.state.useremail = this.props.user.email
        // this.state.gen = this.props.user.gen

        this.state = {id: this.props.user.id, name: this.props.user.name, 
            email: this.props.user.email, gen: this.props.user.gen, isShowing: false}
    }
    handleEdit(){
        let editUser = {name: this.state.name, email: this.state.email, id: this.state.id}
        this.props.editUser(this.state.id, editUser)
        this.setState({isShowing: false})
    }

    render(){
        const {name, email, gen} = this.props.user
        return(
            <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{gen}</p>
            <Button onClick={() => {this.setState({isShowing: true})}}>Edit</Button>
            <Button variant="danger" onClick={() => {this.props.deleteUser(this.state.id)}}>Delete</Button>
            <hr/>
            <Modal show = {this.state.isShowing} onHide = {() => {this.setState({isShowing: false})}}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <input type='text' placeholder='Name' value={this.state.name} 
                onChange={(e) => {this.setState({name: e.target.value})}}/>
                <input type='text' placeholder='Email' value={this.state.email} 
                onChange={(e)=> this.setState({email: e.target.value})}/>
                <input type='text' placeholder='Gen' value={this.state.gen} 
                onChange={(e) => this.setState({gen: e.target.value})}/>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => {this.setState({isShowing: false})}}>Close</Button>
                <Button variant="primary" onClick={() => {this.handleEdit()}}>Save changes</Button>
            </Modal.Footer>
            </Modal>
        </div>
        )
    }
}
export default Item;