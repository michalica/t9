import React from 'react';
import {Input} from 'semantic-ui-react'

function UserInput(props: {
    handleChange: Function,
    isLoading?: boolean,
    validationError?: boolean,
    formValue: string,
    type?: string,
    placeholder?: string,
}) {
    return (
        <Input
            onChange={(event) => {
                props.handleChange(event.target.value);
            }}
            loading={props.isLoading}
            placeholder={props.placeholder}
            error={props.validationError}
            type={props.type}
            value={props.formValue}
        />
    );
};

UserInput.defaultProps ={
    isLoading: false,
    validationError: false,
    type: 'text',
    placeHolder: '',
};

export default UserInput;
