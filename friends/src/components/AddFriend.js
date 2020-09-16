import React, { useState } from "react";
import { axiosWithAuth } from "../components/axiosAuth";
import { useHistory } from "react-router-dom";

const initialFormValues = {
    name: "",
    age: "",
    email: "",
  };


  const AddFriend = ()=> {
    const history = useHistory();
    const [formValues, setFormValues] = useState(initialFormValues);
  
    const handleSumbit = (e) => {
      e.preventDefault();
      axiosWithAuth()
        .post("http://localhost:5000/api/friends", formValues)
        .then((res) => {
          console.log("New Friend");
          console.log(res);
          history.push("/friends-list");
        })
        .catch((err) => {
          console.log(err);
        });
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };

      return (
          <div>
              <form onSubmit={handleSumbit}>
                  <label>
                      <input
                       type="text"
                       onChange={handleChange}
                       name="name"
                       value={formValues.name}
                       placeholder="name"
                      >
                      
                      
                      </input>
                  </label>

                  <label>
                      <input
                  type="number"
                  onChange={handleChange}
                  name="age"
                  value={formValues.age}
                  placeholder="age"
                      >
                      </input>
                  </label>
                  <label>
          <input
            className="bg-gray-100 p-2"
            type="email"
            onChange={handleChange}
            name="email"
            value={formValues.email}
            placeholder="email"
          />
        </label>
        <button>Add Friend</button>

              </form>
          </div>
      )

    } //Add Friend

    export default AddFriend;
