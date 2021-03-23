import React from 'react';

function EditUser(props){
    return(
        <>
            <h1>User {props.match.params.id}</h1>
        </>
    )
}

export default EditUser;