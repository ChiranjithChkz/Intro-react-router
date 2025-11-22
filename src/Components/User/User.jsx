import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';
import UsersDetails2 from '../UsersDetails2/UsersDetails2';

const User = ({user}) => {


    const [visitHome, setVisitHome] = useState(false)
    const location = useLocation();
    console.log(location);
    const {id, name, email, phone} = user;
   const [showInfo, setShowInfo] = useState(false);
    
   const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
   .then(res => res.json())


    const userStyle = {
        border: '2px solid yellow',
        margin: '5px',
        borderRadius: '10px'

    }

    if(visitHome){
        return <Navigate to="/"></Navigate>
    }


    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>contact: {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Detail'} Info</button>
            {
                showInfo &&  <Suspense fallback={<span>Loading...</span>}>
                      <UsersDetails2 userPromise={userPromise}></UsersDetails2>

                </Suspense>
            }
            <button onClick={() => setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;