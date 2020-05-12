import React from 'react';
import Fruit from './Fruit';
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
                <Fruit name={'Strawberries'} origin={'Germany'} price={1.99} picture={Strawberries} />
                <Fruit name={'Blueberries'} origin={'Portugal'} price={2.50} picture={Blueberries} />
                <Fruit name={'Plums'} origin={'USA'} price={3} picture={Plums} />
                <Fruit name={'Bananas'} origin={'Colombia'} price={1} picture={Bananas} />
                <Fruit name={'Apples'} origin={'Argentina'} price={2.99} picture={Apples} />


            </CardColumns>

        </div>
    )
}
export default Products