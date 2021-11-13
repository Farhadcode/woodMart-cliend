import React from 'react';

import {

    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import UserDashboardRoute from '../../Login/UserDashboardRoute/UserDashboardRoute';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import UserHome from '../UserHome/UserHome';









const UserDashboardHome = () => {
    /// const { user } = useAuth()
    let { path, url } = useRouteMatch();
    return (
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 ">
                            <div className="admin-area p-1">
                                <h4>UserDashboard</h4>
                                <div className="all-menu mt-5">
                                    <Link to={`${url}`} className="admin-menu p-5 ">userDashboard</Link>
                                    <br />
                                    <Link to={`${url}/payment`} className="admin-menu p-5">Payment</Link>
                                    <br />
                                    <Link to={`${url}/review`} className="admin-menu p-2" >Review</Link>
                                    {/* <li  >
                                       
                                    </li>
                                    <li className="admin-menu p-2" >
                                       
                                    </li> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 text-center  text-center">

                            <Switch>
                                <Route exact path={path}>
                                    <UserHome></UserHome>
                                </Route>
                                <Route path={`${path}/payment`}>
                                    <Payment></Payment>
                                </Route>
                                <Route path={`${path}/review`}>
                                    <Review></Review>
                                </Route>
                            </Switch>
                        </div>
                        {/* <Switch>
                            <Route exact path={path}>

                            </Route>
                            <UserDashboardRoute path={`${path}/payment`}>
                                <Payment></Payment>
                            </UserDashboardRoute>
                            <UserDashboardRoute path={`${path}/review`}>
                                <Review></Review>
                            </UserDashboardRoute>
                        </Switch> */}
                    </div>
                </div>
                <h2> hello</h2>
            </div>
        </div>
    );
    // <div>
    //     <MyOrder></MyOrder>
    //     <Review></Review>
    //     <Payment></Payment>
    // </div>

};

export default UserDashboardHome;