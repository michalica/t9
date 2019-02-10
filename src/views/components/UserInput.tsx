import React from 'react';
import {Input} from 'semantic-ui-react'

function UserInput(props: { handleChange: Function }) {
    return (
        <Input onChange={(event) => props.handleChange(event.target.value)} loading icon='user' placeholder='Search...'/>
    );
};

export default UserInput;
