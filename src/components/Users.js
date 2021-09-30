import axios from 'axios';
import React from 'react'
import { useState,useEffect} from 'react'
import { UserCard } from './UserCard';
 

export const Users = () => {

    const [listUsers, setListUsers] = useState([]);
    const fetchUsers=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setListUsers(res.data)).catch(err=>alert(err))
    }
    useEffect(() => {
        fetchUsers()
    }, []) 
    return (
        <div className="row">
            {listUsers.map((el,i) => <UserCard user={el}  key={i} />)}
        </div>
    )
}
