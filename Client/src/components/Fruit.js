import React, { Component } from 'react';
import './Fruit.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


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
                <Card style={{ height: '20rem', width: '18rem' }}>
                    <Card.Title>
                        <h5 style={{ fontWeight: '600' }}>{this.props.name}</h5>
                        <Card.Subtitle>
                            <p className='sm'>Origin: {this.props.origin}</p>
                        </Card.Subtitle>
                    </Card.Title>
                    <Card.Img src={this.props.picture} style={{ width: '90px', height: '90px' }} />
                    <Card.Text>
                        <p className='sm'>Qty: {this.state.qty}</p>
                        <p className='sm'>Price: $ {this.props.price}</p>
                        <p className='sm'>Total: $ {this.props.price * this.state.qty}</p>
                    </Card.Text>

                    <Button variant='outline-danger' onClick={this.add}>+1</Button>
                    <Button variant='outline-danger' onClick={this.less} disabled={this.state.qty < 1}>-1</Button>
                    <Button variant='outline-danger' onClick={this.empty}>Empty</Button>
                </Card>
            </div>
        )
    }
}

export default Fruit
