import React from 'react';
import {formatPrice} from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

 class Order extends React.Component {
    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        
        //make sure fishes hav eloaded from DB before continuing
        if(!fish) return null;
        
        const isAvailable = fish && fish.status === 'available';
        if(!isAvailable){
            return <li key={key}>
                Sorry {fish ? fish.name : 'fish'} is no longer available.
            </li>
        }
        return (
            <CSSTransition classNames="order" key={key} timeout={{enter: 500, exit: 500}}>
                <li key={key}>
                    <span>
                    <span>{count} lbs {fish.name}</span>
                    {formatPrice(count * fish.price)}
                    <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
                    </span>
                </li>
            </CSSTransition>
        );
    }
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable){
                return prevTotal + (count * fish.price);
            }
            return prevTotal;
        }, 0);
        return(
            <div className="order-wrap">
                <h2>Order</h2>
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}
                </TransitionGroup>
                <div className="total">
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        );
    }
}

export default Order;