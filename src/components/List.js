import React from 'react'
import { table } from './table'
import { Link } from 'react-router-dom'
import './list.css'
export default function List() {

    const list = table.map((data) => {
        return (<div className='row'>
            <div>{data.name}</div>
            <div>{data.email}</div>
            <div>{data.phone}</div>
            <div>{data.address}</div>
        </div>)
    })
    return (
        <div className="container">

            <div className="row">
                <div>Name</div>
                <div>email</div>
                <div>phone</div>
                <div>address</div>
            </div>
            {list}
            <button><Link to="/">Back To Home</Link></button>
            
        </div>
    )
}
