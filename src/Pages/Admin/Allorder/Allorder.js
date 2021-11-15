import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Allorder = () => {
    const [allOrder, setAllOrder] = useState([]);
    // const [status, setStatus] = useState("");
    // const [orderId, setOrderId] = useState("");
    // const { register, handleSubmit } = useForm();
    const { user } = useAuth();


    useEffect(() => {
        fetch(`https://secret-shelf-20286.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setAllOrder(data));
    }, [user.email]);

    // const status = "apporved";
    // const handleOrderId = (id) => {
    //     setAllOrder(id);
    //     console.log(id);
    // };

    // const onSubmit = (data) => {
    //     console.log(data, orderId);
    //     fetch(`http://localhost:5000/statusUpdate/${orderId}`, {
    //         method: "PUT",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(data),
    //     })
    //         .then((res) => res.json())
    //         .then((result) => console.log(result));
    // };

    // console.log(status);
    // delete order
    const myOrderDelete = (id) => {

        fetch(`https://secret-shelf-20286.herokuapp.com/orders/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.deletedCount) {
                    alert("Delete Sccessfully ?")

                    const remaining = allOrder.filter(order => order._id !== id);
                    setAllOrder(remaining);
                }
            })
    }
    return (
        <div>
            <h2 className="text-center mb-5">All Order: {allOrder?.length}</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {allOrder?.map((order, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{order?.name}</td>
                            <td>{order?.PhoneNumer}</td>
                            <td>{order?.email}</td>
                            <td>{order?.address}</td>

                            <td>{order?.status}
                                {/* <form onSubmit={handleSubmit(onSubmit)}>
                                    <select
                                        onClick={() => handleOrderId(order?._id)}
                                        {...register("status")}
                                    >
                                        <option value={order?.status}>{order?.status}</option>
                                        <option value="approve">approve</option>
                                        <option value="done">Done</option>
                                    </select>
                                    <input type="submit" />
                                </form> */}
                            </td>
                            <button className="btn bg-danger p-2" onClick={() => myOrderDelete(order?._id)}>Delete Order</button>
                        </tr >
                    </tbody >
                ))}
            </Table >

        </div>
    );



};

export default Allorder;

// onClick={() => myOrderDelete(order?._id)} 