import React, { Component } from 'react';
import './Fruit.css';
import { Button, CardBody, CardText, CardImg } from 'reactstrap';


class Fruit extends Component {
    state = {
        qty: 0
    }

    add = () =>
        this.setState({
            qty: this.state.qty + 1
        })
    less = () =>
        this.setState({
            qty: this.state.qty - 1
        })

    empty = () =>
        this.setState({
            qty: 0
        })

    render() {
        return (
            <div>
                <CardBody>
                    <CardImg src={this.props.picture} style={{ width: '100px', height: '100px' }} />
                    <CardText>
                        <h5>{this.props.name}</h5>
                        <p>Origin: {this.props.origin}</p>
                        <p>Qty: {this.state.qty}</p>
                        <p>Price: $ {this.props.price}</p>
                        <p>Total: $ {this.props.price * this.state.qty}</p>
                    </CardText>
                    <Button outline color='danger' onClick={this.add}>+1</Button>
                    <Button outline color='danger' onClick={this.less} disabled={this.state.qty < 1}>-1</Button>
                    <Button outline color='danger' onClick={this.empty}>Empty</Button>
                </CardBody>
            </div>
        )
    }
}

export default Fruit
