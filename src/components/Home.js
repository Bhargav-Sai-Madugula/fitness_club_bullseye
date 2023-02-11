import React from 'react'
import { Link } from 'react-router-dom'
import { table } from './table'
export default function Home() {

    function add() {
        const data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value
        }
        table.push(data);
        console.log(table)
    }
    return (
        <div className='container'>
        <h1>Fitness Club Registration</h1>
            <div className="form">
                <input type="text" name="name" id="name" placeholder='name' /><br></br>
                <input type="email" name="email" id="email" placeholder='Email' /><br></br>
                <input type="number" name="phone" id="phone" placeholder='Phone Number' /><br></br>
                <input type="text" name="address" id="address" placeholder='address' /><br></br>
                <button onClick={add}>Add Member</button>
            </div>
            <button><Link to='./list'>View Member List</Link></button>
            
        </div>
    )
}
