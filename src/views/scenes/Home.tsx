import React from 'react';
import UserInput from '../components/UserInput';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react'

const Logo = styled.h1`
    font-size: 22px
    font-weight: bold
    margin-top: 80px!important
`

function Home({}) {
    return (
        <div>
            <Container textAlign='center'>
                <Logo>T9</Logo>
                <UserInput />
            </Container>
        </div>
    );
};

export default Home;
