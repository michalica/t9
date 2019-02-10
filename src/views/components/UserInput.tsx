import React from 'react';
import {Input} from 'semantic-ui-react'

function UserInput(props: { handleChange: Function, isLoading: boolean }) {
    return (
        <Input
            onChange={(event) => props.handleChange(event.target.value)}
            loading={props.isLoading}
            placeholder='Search...'
        />
    );
};

export default UserInput;
