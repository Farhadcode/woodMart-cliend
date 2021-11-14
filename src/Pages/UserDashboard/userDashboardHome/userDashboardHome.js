import React from 'react';

import {

    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

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
                                    <div>
                                        <Link to={`${url}`} className="dashboard-style ">My Order</Link>
                                        <br />
                                        <Link to={`${url}/payment`} className="dashboard-style">Payment</Link>
                                        <br />
                                        <Link to={`${url}/review`} className="dashboard-style" >Review</Link>
                                    </div>

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

            </div>
        </div>
    );

};

export default UserDashboardHome;