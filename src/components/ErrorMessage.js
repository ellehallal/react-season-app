import React from 'react';

const ErrorMessage = (props) => {
    return (
        <div class="ui negative message">
            <i class="close icon"></i>
            <div class="header">
                Sorry! An error occured.
            </div>
            <p>{props.message}</p>
        </div>
    );
}

export default ErrorMessage;