import React, { useEffect, useState } from 'react';
import Servece from '../Servece/Servece';
import './Serveces.css'

const Serveces = () => {
    const [servece, setServece] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setServece(data.slice(0, 6)))
    }, [])
    console.log(servece);
    return (
        <div>
            <h1> all products{servece.length}</h1>

            <div className="service-container">
                {
                    servece.map(servece => <Servece
                        key={servece.id}
                        servece={servece}
                    ></Servece>)
                }
            </div>

        </div>
    );
};

export default Serveces;