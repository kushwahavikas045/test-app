import React, { Component } from 'react'
import './userform.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Card,Button } from 'react-bootstrap';
import axios from 'axios';
export class Userform extends Component {
 constructor(){
   super()
   this.state={
     first_name:"",
     last_name:"",
     email:"",
     image:"",
     message:"",
     loading:false

   }
 }
//getdata function 
 dataChange(e){
   this.setState({
     [e.target.name]:e.target.value
   })
 }
 //cancel Button function
 handlecancel(e){
   e.preventDefault();
   window.location.href = '/';
 }

 //postData function
postData(e){
  e.preventDefault();
  const first_name = this.state.first_name;
  const last_name = this.state.last_name;
  const email = this.state.email;
  const image = this.state.image;
  const message = this.state.message;

  this.setState({
    loading:true
  })
  const data ={
    first_name,
    last_name,
    email,
    image,
    
  }
  axios.post('https://reqres.in/api/users',data).then(response =>{
    console.log(response,'response');
    if(response.status == 201){
      window.location.href = "/";
    }else{
      console.log('error');
    }
    console.log(response.data.data);
    this.setState({ 
      message:response.data
    })
  }).catch(error =>{
    console.log(error);
  })
}
LoadorShow(){
  if(this.state.loading){
    return <p>loading...</p>
  }
  else{
    return <p>{this.state.message} </p>
  }
}

    render() {
        return (
            <Card body style={{marginTop:"20px",width:"20rem",position:'absolute',top:'50%',left:'50%',transform:"translate(-50%,-50%)"}}>
               
 <Form onSubmit={this.postData.bind(this)} action="/">
  <Form.Group controlId="formBasicText">
    <Form.Label>First Name:</Form.Label>
    <Form.Control type="text" name="first_name" value={this.state.first_name} onChange={this.dataChange.bind(this)} placeholder="First name" required/>
    
  </Form.Group>

  <Form.Group controlId="formBasicText">
    <Form.Label>Last Name:</Form.Label>
    <Form.Control type="text" name="last_name" value={this.state.last_name} onChange={this.dataChange.bind(this)} placeholder="last name" required/>
  </Form.Group>
  
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" name="email" value={this.state.email} placeholder="email" onChange={this.dataChange.bind(this)} required/>
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Label>pofile image</Form.Label>
    <Form.Control type="file" name="image" value={this.state.image} placeholder="jpeg,png format" onChange={this.dataChange.bind(this)} required/>
  </Form.Group>
  
  <Button variant="primary" type="submit" style={{marginRight:"40px"}}>
    Submit
  </Button>
  <Button variant="danger" onClick={this.handlecancel}>
    Cancel
  </Button>
</Form>
{this.LoadorShow()}
            </Card>
        )
    }
}

export default Userform;
