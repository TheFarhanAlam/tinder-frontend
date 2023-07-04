import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import "./css/AddUser.css"

function AddUser() {
    const [user, setUser] = useState({
        name: "",
        url: ""
    })
    const Navigate = useNavigate();
    const handleChange = (event) => {
        const {name, value} = event.target;
        setUser((prevValue)=>({
            ...prevValue,
            [name]: value
        }))
    }
    const addUser = async (event) =>{
        event.preventDefault();
        try {
            const {name, url} = user;
            const add = await axios.post("https://tinder-backend-vjut.onrender.com/add", {
                name: name,
                imgUrl: url
            })
            Navigate("/")
        } catch (error) {
           console.log(error); 
        }
    }
  return (
    <div className='addUser mt-20'>
        <form className='grid place-content-center'>
            <input className="p-3 mb-4" name='name' onChange={handleChange} value={user.name} type="text" placeholder='Enter Name'/>
            <input className="p-3 mb-4" name='url' onChange={handleChange} value={user.url} type="text" placeholder='Enter Url'/>
            <button type='submit' className='bg-[#E90064] rounded-md w-5/5 p-4' onClick={addUser}>Add User</button>
        </form>
    </div>
  )
}

export default AddUser