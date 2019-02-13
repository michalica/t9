import React from 'react';
import UserInput from '../components/UserInput';
import Result from '../components/Result';

import styled from 'styled-components';
import {Container} from 'semantic-ui-react'
import Keyboard from '../components/Keyboard';
import MoreButton from "../components/MoreButton";

const Logo = styled.h1`
    font-size: 22px
    font-weight: bold
    margin-top: 80px!important
    color: rgb(0, 169, 145);

`

interface PropsInterface {
    fetchApi: Function,
    letters: Array<string>,
    isLoading: boolean,
    validationError: boolean,
    formValue: string,
    doRequest: Function,
}

class Home extends React.Component<PropsInterface, any> {

    handleMoreButtonClick = () => {
        this.props.doRequest(this.props.formValue, true);
    }

    render() {
        const {
            letters,
            isLoading,
            validationError,
            formValue,
            fetchApi,
        } = this.props;
        return (
            <div>
                <Container textAlign='center'>
                    <Logo>T9</Logo>
                    <UserInput
                        isLoading={isLoading}
                        handleChange={fetchApi}
                        validationError={validationError}
                        formValue={formValue}
                        type="number"
                        placeholder="Search for ..."
                    />
                    <br/>
                    <br/>
                    <Keyboard
                        handleChange={fetchApi}
                        value={formValue}
                    />
                    <Result
                        letters={letters}
                        handleShowMoreButtonClick={this.handleMoreButtonClick}
                        isLoading={isLoading}
                    />
                </Container>
            </div>
        );
    }
};

export default Home;
