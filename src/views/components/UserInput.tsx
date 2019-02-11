import React from 'react';
import {Input} from 'semantic-ui-react'

function UserInput(props: {
    handleChange: Function,
    isLoading: boolean,
    validationError: boolean,
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
        />
    );
};

export default UserInput;
