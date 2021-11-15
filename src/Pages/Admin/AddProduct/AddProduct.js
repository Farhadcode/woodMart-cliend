import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddProduct = () => {

    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/products', data)
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
            <h2> Add a Product</h2>
            <form className="from-style" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea  {...register("description")} placeholder="Description" />
                <input {...register("price")} placeholder="Price" />
                <input {...register("image")} placeholder="image url" />
                <input className="main-btn rounded-pill " type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;