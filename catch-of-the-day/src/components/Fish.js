import React from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from '../helpers';

class Fish extends React.Component{
    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string, 
            name: PropTypes.string,
            price: PropTypes.number,
            description: PropTypes.string,
            status: PropTypes.string
        }),
        addToOrder: PropTypes.func
    }
    render(){
        const {image, name, price, description, status} = this.props.details;
        const isAvailable = status === 'available';

        return <li className='single-fish'>
            <img src={image} alt={name}></img>
            <h3 className="fish-name">
                {name}
                <span className="price"> {formatPrice(price)}</span>
            </h3>
            <p>{description}</p>
            <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>{isAvailable ? 'Add to Order' : 'Sold Out!'}</button>
        </li>
    }
}

export default Fish;