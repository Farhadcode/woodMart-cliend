import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Table } from 'react-bootstrap';

const Allorder = () => {
    const [AllOrder, setAllOrder] = useState([]);
    const { user } = useAuth();


    useEffect(() => {
        fetch(`https://secret-shelf-20286.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setAllOrder(data));
    }, [user.email]);
    // console.log(myOrder);

    const myOrderDelete = (id) => {

        fetch(`https://secret-shelf-20286.herokuapp.com/orders/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.deletedCount) {
                    alert('admin order delete ')
                    const remaining = AllOrder.filter(order => order._id !== id);
                    setAllOrder(remaining);
                }
            })
    }
    return (
        <div>
            <h2 className="text-center mb-5">My Order: {AllOrder?.length}</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>phone</th>
                        <th>Email</th>
                        {/* <th>Price</th>
                <th>Address</th> */}
                        <th>Date</th>


                        <th>Action</th>
                    </tr>
                </thead>
                {AllOrder?.map((order, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{order?.name}</td>
                            <td>{order?.phoneNumber}</td>
                            <td>{order?.email}</td>
                            {/* <td>{order?.Charge}</td>
                    <td>{order?.address}</td> */}
                            <td>{order?.address}</td>
                            <button className="btn bg-danger p-2" onClick={() => myOrderDelete(order?._id)} >Cancel Order</button>
                        </tr >
                    </tbody >
                ))}
            </Table >
        </div>
    );

};

export default Allorder;