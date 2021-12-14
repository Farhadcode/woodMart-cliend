
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://secret-shelf-20286.herokuapp.com/order', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('added  successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <h2 className='order'> Order Place</h2>
            <form className="from-style" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input defaultValue={user.email}{...register("email")} placeholder="Email" />
                <input {...register("phoneNumber")} placeholder="Phone Number" />
                <input {...register("address")} placeholder="Address" />
                <input className="main-btn rounded-pill " type="submit" />
            </form>
        </div>
    );
};

export default PlaceOrder;