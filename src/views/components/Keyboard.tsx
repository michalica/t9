import React, {Component} from 'react';
import styled from 'styled-components';

const Button = styled.button`
    margin: 5px!important
`


class Keyboard extends Component<{
    handleChange: Function,
    value: string
}, any> {


    public handleClick = (number: string) => {
        return this.props.handleChange(this.props.value + number)
    }

    delete = () => {
        const val = this.props.value;
        if (val.length > 0) {
            return this.props.handleChange(val.slice(0, val.length - 1));
        }
        return null;
    }

    render() {
        return (
            <div>
                <div>
                    <Button className="ui icon button" onClick={() => this.handleClick("1")}>1</Button>
                    <Button className="ui icon button" onClick={() => this.handleClick("2")}>2</Button>
                    <Button className="ui icon button" onClick={() => this.handleClick("3")}>3</Button>
                    <br/>
                    <Button className="ui icon button" onClick={() => this.handleClick("4")}>4</Button>
                    <Button className="ui icon button" onClick={() => this.handleClick("5")}>5</Button>
                    <Button className="ui icon button" onClick={() => this.handleClick("6")}>6</Button>
                    <br/>
                    <Button className="ui icon button" onClick={() => this.handleClick("7")}>7</Button>
                    <Button className="ui icon button" onClick={() => this.handleClick("8")}>8</Button>
                    <Button className="ui icon button" onClick={() => this.handleClick("9")}>9</Button>
                    <br/>
                    <Button className="ui icon button" disabled>#</Button>
                    <Button className="ui icon button" onClick={() => this.handleClick("0")}>0</Button>
                    <Button className="ui icon button" onClick={() => this.delete()}>&lt;</Button>
                </div>
            </div>
        );
    }
}


export default Keyboard;
