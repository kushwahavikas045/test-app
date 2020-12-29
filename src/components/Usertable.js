import React,{useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Alert } from 'react-bootstrap';

function Usertable() {
    const [users, setUsers] = useState([]);

    useEffect( async() =>{
        const res = await fetch('https://reqres.in/api/users?page=2');
        const data = await res.json();
        setUsers(data.data);
    })
    return (
        <div>
        <Alert variant="success">
  <Alert.Heading>User details table</Alert.Heading>
  
  
</Alert>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>User image</th>
          </tr>
        </thead>
        <tbody>
            {users.length && users.map(user =>(
                <tr key={user.id}>
                
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td><img style={{borderRadius: "50%"}} src={user.avatar} /></td>
              </tr>
            ))}
          
         
        </tbody>
      </Table>
      </div>
    )
}

export default Usertable
