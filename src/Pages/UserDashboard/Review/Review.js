import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';


const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://secret-shelf-20286.herokuapp.com/review', data)
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
            <h2> Add Review</h2>
            <form className="from-style" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input defaultValue={user.email}{...register("email")} placeholder="Email" />
                <textarea  {...register("description")} placeholder="Review" />
                <input {...register("image")} placeholder="image url" />
                <input {...register("county")} placeholder="county" />
                <input className="main-btn rounded-pill " type="submit" />
            </form>
        </div>
    );
};

export default Review;