import React from 'react';
import Fruit from './Fruit';

import { CardDeck, Card } from 'reactstrap';
import Apples from '../img/apples.jpeg';
import Bananas from '../img/bananas.jpg';
import Plums from '../img/plums.jpg';
import Blueberries from '../img/blueberries.jpg';
import Strawberries from '../img/strawberries.jpg';


const Products = () => {

    return (
        <div>
            <h2>Our Fruit Selection</h2>
            <CardDeck className='box'>
                <Card outline color='danger' className='inbox'>
                    <Fruit name={'Strawberries'} origin={'Germany'} price={1.99} picture={Strawberries} />
                </Card>
            </CardDeck>

        </div>
    )
}


export default Products