
import React, { useState } from 'react';




const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSucces] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSucces(true);
                    setEmail('');
                    console.log(data);
                }

            })


        e.preventDefault()
    }
    return (
        <div>
            <h2> Make an Admin </h2>
            <form className="from-style" onSubmit={handleAdminSubmit}>

                <input
                    placeholder="email"
                    type="emial"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <br />
                <input className="main-btn rounded-pill " type="submit" value="Make Admin" />
                {/* <Button type="submit" className="main-btn rounded-pill ">Make Admin</Button> */}

            </form>
            {
                success && <div className="alert alert-success" role="alert">
                    Admin Made Successfully
                </div>
            }

        </div >
    );
};

export default MakeAdmin;