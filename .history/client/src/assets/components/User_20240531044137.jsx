import axios from "axios";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
     axios.get('http://localhost:3001')
     .then(result => setUsers(result.data))
     .catch(err => console.log(err))
  },[])
  

  return (
    <div className="d-flex vw-100 justify-content-center align-items-center vh-100 bg-primary">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h5 className="card-title text-center">User Table</h5>
        </div>
        <div className="card-body">
          <Link to="/create" className="btn btn-success mb-3">Add +</Link>
          <table className="table table-bordered table-light table-hover table-responsive rounded mb-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <div className="d-flex justify-content-between">

                      <Link to={`/update/${user._id}`} className="btn btn-primary btn-sm me-2">Update</Link>

                        <button className="btn btn-danger btn-sm"
                         onClick={(event)=> handleDelete(user._id)} >Delete</button>

                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default User;