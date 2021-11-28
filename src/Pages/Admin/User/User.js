import React, { useEffect, useState } from 'react';

const User = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    console.log(user);

    return (
        <h2> k go</h2>
        // {
        //     user.map((users, index) =>
        //         <div style={{ height: 550, width: '100%' }}>
        //             <DataGrid
        //                 rows={rows}
        //                 columns={columns}
        //                 pageSize={8}
        //                 rowsPerPageOptions={[8]}
        //                 checkboxSelection
        //             ></DataGrid>
        //         </div>

        //     )
        // }
    );
};

export default User;