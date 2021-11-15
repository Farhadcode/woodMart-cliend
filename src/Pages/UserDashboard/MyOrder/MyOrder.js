import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const [myOrder, setMyOrder] = useState([]);
    const { user } = useAuth();


    useEffect(() => {
        fetch(`https://secret-shelf-20286.herokuapp.com/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, [user.email]);
    console.log(myOrder);

    const myOrderDelete = (id) => {

        fetch(`https://secret-shelf-20286.herokuapp.com/orders/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.deletedCount) {
                    alert('admin order delete ')
                    const remaining = myOrder.filter(order => order._id !== id);
                    setMyOrder(remaining);
                }
            })
    }
    return (
        <div>
            <h2 className="text-center mb-5">My Order: {myOrder?.length}</h2>

            <div className="services">
                <div className="row container">
                    {myOrder?.map((order, index) => (
                        <div className="col-md-4">
                            <div className="service border border p-3">
                                <div className="services-img ">
                                    <img className="w-100" src={order?.image} alt="" />
                                </div>

                                <h6>{order?.name}</h6>
                                <h4>{order?.model}</h4>
                                <p>{order?.description}</p>
                                <h3 className="text-danger"> Cost :${order?.price}</h3>

                                <button className="btn bg-danger p-2" onClick={() => myOrderDelete(order?._id)} >Cancel</button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default MyOrder;