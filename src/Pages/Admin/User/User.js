import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';

const columns = [


    {
        field: 'name',
        headerName: 'Name',
        width: 150,

    },
    {
        field: 'email',
        headerName: 'Email',
        width: 250,

    }
];

const User = () => {
    const [user, setUser] = useState([]);
    // http://localhost:5000/users
    //https://jsonplaceholder.typicode.com/users

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);
    console.log(user);



    return (

        <>
            <h2> All User </h2>
            <div style={{ height: 530, width: '100%' }}>
                <DataGrid
                    rows={user}
                    columns={columns}
                    pageSize={8}
                    rowsPerPageOptions={[5]}
                    checkboxSelection

                />
            </div>


        </>
    )


};

export default User;