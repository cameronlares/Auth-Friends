import React from "react";
import axios from "axios";
import { axiosWithAuth } from '../components/axiosAuth';
import {useHistory} from 'react-router-dom'
import {useState} from 'react'

const Login = () => {
  const history =useHistory();
  const [credentials, setCredentials] =useState({
    username: '',
    password: ''
  })



  const handleChange = e => {
    setCredentials({
      credentials: {
        ...credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  const login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", {
        username: "Lambda School",
        password: "i<3Lambd4"
      })
      .then(res => {
        console.log(res.date)
        // res.data.payload ==> localStorage
        // navigate user to the "protected" route
        localStorage.setItem("token", res.data.payload);
        history.push("/friends-list");
      })
      .catch(err => console.log(err))
    };


    return (
      <div>
        <form onSubmit={login}>
        <input
        autoComplete="off"
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        />
        <input 
         autoComplete="off"
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        />
        <button>Login</button>
        
        </form>
      </div>
    );
  }
  

  export default Login;