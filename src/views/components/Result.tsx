import React from 'react';
import styled from 'styled-components';

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



const Result = (props:{letters: Array<string>}) => {
    if(!props.letters) {
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
        </div>
    );
}


export default Result;
