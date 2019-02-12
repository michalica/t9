import React from 'react';
import {Button} from "semantic-ui-react";

const MoreButton = (props: {
    text: string,
    handleClick: Function,
    isLoading: boolean,
}) => {
    return (
        <div>
            <Button
                onClick={() => props.handleClick()}
                loading={props.isLoading}
            >
                {props.text}
            </Button>
        </div>
    );
};


export default MoreButton;
