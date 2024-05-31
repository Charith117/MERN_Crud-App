import React, { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from 'axios'

function UpdateUser() {
  const{id} = useParams()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate()

  constUpdate = (event) => {
    event.preventDefault();
    axios.put("http://localhost:3001/createUser/updateUser"+id,{name,email,age})
    .then(result => {
      
      console.log(result)
      navigate('/')
    
    })
    .catch(err => console.log(err))
  };

  useEffect(()=>{
    axios.get('http://localhost:3001/getUser/'+id)
    .then(result => {console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch(err => console.log(err))
 },[])

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
          <h5 className="card-title text-center card-header bg-primary text-white">Update User</h5>
            <div className=" vw-100  text-white">
             
            </div>
            <div className="card-body">
              <form onSubmit={Update}>
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
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;