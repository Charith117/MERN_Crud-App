import React, { useState } from "react";
import axios from 'axios'
import{ useNavigate} from 'react-router-dom'

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate()

  const Submit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/createUser",{name,email,age})
    .then(result => {
      
      console.log(result)
      navigate('/')
    
    })
    .catch(err => console.log(err))

    
  };

  return (
    <div className="d-flex vw-100 justify-content-center align-items-center vh-100 bg-primary">
      <div className="card w-50 ">
        <div className="card-header bg-primary text-white">
          <h5 className="card-title text-center">Create User</h5>
        </div>
        <div className="card-body">
          <form onSubmit={Submit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                value={age}
                onChange={(event) => setAge(event.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;