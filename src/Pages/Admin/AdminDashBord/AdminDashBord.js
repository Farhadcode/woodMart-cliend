import React from 'react';
import './AdminDashBord.css'

const AdminDashBord = () => {
    return (

        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 ">
                            <div className="admin-area p-1">
                                <h3>Dashboard</h3>
                                <div className="all-menu mt-5">
                                    <li

                                        className="admin-menu p-2"
                                    >
                                        All Orders
                                    </li>
                                    <li

                                        className="admin-menu p-2"
                                    >
                                        Add Product
                                    </li>
                                    <li
                                        // onClick={() => setControl("allEvents")}
                                        className="admin-menu p-2"
                                    >
                                        Make Admin
                                    </li>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-9 text-center  text-center">
                            {control === "allOrder" && <OrderManage></OrderManage>}
                            {control === "addService" && <AddService></AddService>}

                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashBord;