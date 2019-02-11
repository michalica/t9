import React from 'react';
import UserInput from '../components/UserInput';
import Result from '../components/Result';

import styled from 'styled-components';
import {Container} from 'semantic-ui-react'
import Keyboard from '../components/Keyboard';

const Logo = styled.h1`
    font-size: 22px
    font-weight: bold
    margin-top: 80px!important
`

interface PropsInterface {
    fetchApi: Function,
    letters: Array<string>,
    isLoading: boolean,
    validationError: boolean,
    formValue: string,
}

class Home extends React.Component<PropsInterface, any> {
    constructor(props: PropsInterface) {
        super(props);
    }

    handleChange = (values: String) => {
        this.props.fetchApi(values);
        console.log(values);
    }

    render() {
        const {
            letters,
            isLoading,
            validationError,
            formValue,

        } = this.props;
        return (
            <div>
                <Container textAlign='center'>
                    <Logo>T9</Logo>
                    <UserInput
                        isLoading={isLoading}
                        handleChange={this.handleChange}
                        validationError={validationError}
                        formValue={formValue}
                        type="number"
                        placeholder="Search for ..."
                    />
                    <br/>
                    <br/>
                    <Keyboard
                        handleChange={this.handleChange}
                        value={formValue}
                    />
                    <Result
                        letters={letters}
                    />
                </Container>
            </div>
        );
    }
};

export default Home;
