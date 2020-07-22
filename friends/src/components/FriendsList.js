import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../components/axiosAuth';
 
export const FriendsList = () =>{
    const [data, setData] = useState([])


// componentDidMount() {
//     getData()
// }

// const getData = () => {

useEffect(()=>{
    axiosWithAuth().get("http://localhost:5000/api/friends")
    .then(res => {
        setData(res.data)
        console.log(res)
    })
    .catch(err => console.log(err,'error'))
}, [])
   


return (
<div className = "friends">

<h1> My Friends List</h1>
{data.map((arr,index) =>(
<p key={index}> Name: {arr.name}Age{arr.age}Email{arr.email}</p>
))}

</div>
);
}
