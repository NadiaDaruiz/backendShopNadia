import React, { Component } from 'react';
import { Button, CardBody, CardText, CardImg } from 'reactstrap';


class Products extends Component {
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
                    <CardImg src={this.props.picture} style={{ width: '185px', height: '185px' }} />
                    <CardText>
                        <h2>{this.props.name}</h2>
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

export default Products