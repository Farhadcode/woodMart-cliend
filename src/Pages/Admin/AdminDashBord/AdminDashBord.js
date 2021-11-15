import React from 'react';
import './AdminDashBord.css'
import {

    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import Allorder from './../Allorder/Allorder';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from './../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';


const AdminDashBord = () => {
    let { path, url } = useRouteMatch();
    return (

        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 ">
                            <div className="admin-area p-1">
                                <h3>Dashboard</h3>
                                <div className="all-menu mt-5">

                                    <div>
                                        <Link to={`${url}`} className="dashboard-style">admin</Link>
                                        <br />
                                        <Link to={`${url}/allOrder`} className="dashboard-style">All Order</Link>
                                        <br />
                                        <Link to={`${url}/addProduct`} className="dashboard-style" >Add Product</Link>

                                        <br />
                                        <Link to={`${url}/makeAdmin`} className="dashboard-style"> Make Admin</Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-9 text-center  text-center">
                            <Switch>
                                <Route exact path={path}>
                                    <DashboardHome></DashboardHome>
                                </Route>
                                <AdminRoute path={`${path}/allOrder`}>
                                    <Allorder></Allorder>
                                </AdminRoute>
                                <AdminRoute path={`${path}/addProduct`}>
                                    <AddProduct></AddProduct>
                                </AdminRoute>
                                <AdminRoute path={`${path}/makeAdmin`}>
                                    <MakeAdmin></MakeAdmin>
                                </AdminRoute>
                            </Switch>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashBord;