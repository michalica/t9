import React from 'react';
import styled from 'styled-components';
import MoreButton from "./MoreButton";

const List = styled.ul`
    list-style: none
    padding-left: 0px
`

const ListItem = styled.li`
    text-decoration: none
    margin-bottom: 15px
    font-size: 25px
    font-weight: bold
`


const Result = (props: {
    letters: Array<string>,
    handleShowMoreButtonClick: Function,
    isLoading: boolean,
}) => {
    if (!props.letters || props.letters.length == 0) {
        return <div></div>;
    }
    const items = props.letters.map((item, key) => {
        return <ListItem key={key}> {item} </ListItem>
    });
    return (
        <div>
            <List>
                {
                    items
                }
            </List>
            {
                props.letters.length >= 10 &&
                <MoreButton
                    text="+"
                    handleClick={props.handleShowMoreButtonClick}
                    isLoading={props.isLoading}
                />
            }

        </div>
    );
}


export default Result;
