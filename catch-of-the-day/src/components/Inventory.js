import React from 'react';
import fishes from '../sample-fishes';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

export default class Inventory extends React.Component {
    static propTypes = {
        fishes: PropTypes.object,
        addFish: PropTypes.func,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func
    }
    render() {
        return(
            <div className="Inventory">
                <p>Inventory!</p>
                {Object.keys(this.props.fishes).map(key => <EditFishForm updateFish={this.props.updateFish} deleteFish={this.props.deleteFish} index={key} key={key} fish={this.props.fishes[key]}/>)}
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>
        );
    }
}