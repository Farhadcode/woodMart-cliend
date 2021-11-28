import { faShoppingBag, faShoppingCart, faUsers } from '@fortawesome/free-solid-svg-icons';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import User from '../User/User';




const DashboardHome = () => {
    const [totalOrders, setTotalOrders] = useState([]);
    const [totalProducts, setTotalProducts] = useState([]);
    const [totalUsers, setTotalUsers] = useState([]);


    // total orders
    useEffect(() => {
        fetch(`https://secret-shelf-20286.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setTotalOrders(data));
    }, []);
    // console.log(totalOrders);

    // total products
    useEffect(() => {
        fetch(`https://secret-shelf-20286.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setTotalProducts(data));
    }, []);
    // total users
    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => setTotalUsers(data));
    }, []);


    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'lastName', headerName: 'Name', width: 130 },
        { field: 'role', headerName: 'Role', width: 130 },

        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            // valueGetter: (params) =>
            //     `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
            //     }`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 10, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 11, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 12, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 13, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 14, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    return (
        <>

            <section class="container my-5">
                {/* <h1 class="py-1">Analysis</h1> */}
                <div class="row g-5">
                    <div class="col-lg-4 col-md-6">
                        <div class="p-2 border rounded-3
             align-items-center justify-content-between shadow p-3 mb-5 bg-body rounded">
                            <h5>Total Product</h5>
                            <br />
                            <h5><FontAwesomeIcon className="iconColor" icon={faShoppingBag} /> {totalProducts.length}</h5>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="p-2 border rounded-3
          align-items-center justify-content-between shadow p-3 mb-5 bg-body rounded">
                            <h5 >Total Orders</h5>
                            <br />

                            <h5> <FontAwesomeIcon icon={faShoppingCart} />           {totalOrders.length}</h5>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="p-2 border rounded-3
          align-items-center justify-content-between shadow p-3 mb-5 bg-body rounded">
                            <h5>Total Users</h5>
                            <br />

                            <h5> <FontAwesomeIcon icon={faUsers} />  {totalUsers.length}</h5>
                        </div>
                    </div>
                </div>
            </section>

            <User></User>
        </>
    );
};

export default DashboardHome;

