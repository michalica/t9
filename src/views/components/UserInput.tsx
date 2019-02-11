import React from 'react';
import {Input} from 'semantic-ui-react'

function UserInput(props: {
    handleChange: Function,
    isLoading: boolean,
    validationError: boolean,
    formValue: string,
}) {
    return (
        <Input
            onChange={(event) => {
                props.handleChange(event.target.value);
            }}
            loading={props.isLoading}
            placeholder='Search...'
            error={props.validationError}
            type="number"
            value={props.formValue}
        />
    );
};

export default UserInput;
