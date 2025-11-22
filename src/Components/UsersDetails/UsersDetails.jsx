import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UsersDetails = () => {

    const user = useLoaderData();

    const {params} = useParams();
    console.log(params);

    // const params = useParams();
    // console.log(params)

    const {website} = user;

    return (
        <div>
            <h2>Users details</h2>
            <h5>Name: {website}</h5>
        </div>
    );
};

export default UsersDetails;