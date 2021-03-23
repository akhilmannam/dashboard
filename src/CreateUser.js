import React from 'react';

function CreateUser(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <label htmlFor="Username">Username</label>
                        <input className='form-control' type="text" id='Username' />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="Email">Email</label>
                        <input className='form-control' type="text" id='Email' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <button className='btn btn-primary'>Add User</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateUser;