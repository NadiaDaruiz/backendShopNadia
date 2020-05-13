import React from 'react';
import Order from './Order';
import './Products.css';
import { CardColumns } from 'reactstrap';

import Apples from '../img/apples.jpeg';
import Bananas from '../img/bananas.jpg';
import Plums from '../img/plums.jpg';
import Blueberries from '../img/blueberries.jpg';
import Strawberries from '../img/strawberries.jpg';


const Products = () => {

    return (
        <div className='products-container'>
            <h2>Our Fruit Selection</h2>
            <CardColumns>
                <Order name={'Strawberries'} origin={'Germany'} price={1.99} picture={Strawberries} />
                <Order name={'Blueberries'} origin={'Portugal'} price={2.50} picture={Blueberries} />
                <Order name={'Plums'} origin={'USA'} price={3} picture={Plums} />
                <Order name={'Bananas'} origin={'Colombia'} price={1} picture={Bananas} />
                <Order name={'Apples'} origin={'Argentina'} price={2.99} picture={Apples} />

            </CardColumns>

        </div>
    )
}
export default Products