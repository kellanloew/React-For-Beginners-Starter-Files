import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header'
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
    state = {
        fishes: {},
        order: {},
    };
    static propTypes = {
        match: PropTypes.object
    }
    componentDidMount(){
        const {params} = this.props.match;
        // reinstate local storage
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef){
            this.setState({order: JSON.parse(localStorageRef)});
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }
    
    componentDidUpdate(){
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    addFish = fish => {
        // take copy
        const fishes = {...this.state.fishes};
        // add new fish`    
        fishes[`fish${Date.now()}`] = fish;
        // update state with new fishes
        this.setState({
            fishes: fishes
        });
    }

    updateFish = (key, updatedFish) => {
        const fishes = {...this.state.fishes};
        fishes[key] = updatedFish;
        this.setState({
            fishes: fishes
        });
    }

    deleteFish = (key) => {
        const fishes = {...this.state.fishes};
        fishes[key] = null;
        this.setState({fishes});
    }

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        })
    }

    addToOrder = (key) => {
        // copy state
        const order = {...this.state.order};
        // either add to order or update number
        order[key] = order[key] + 1 || 1;
        this.setState({order});
    }

    removeFromOrder = (key) => {
        // copy state
        const order = {...this.state.order};
        // remove object
        delete order[key]; 
        this.setState({order});
    }

    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline={222} />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish details={this.state.fishes[key]} addToOrder={this.addToOrder} index={key} key={key} /> 
                            ))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder}></Order>
                <Inventory addFish={this.addFish} updateFish={this.updateFish} deleteFish={this.deleteFish} loadSampleFishes={this.loadSampleFishes} fishes={this.state.fishes}/>
            </div>
        );
    }
}

export default App;