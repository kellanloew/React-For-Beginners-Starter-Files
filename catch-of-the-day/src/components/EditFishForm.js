import React from 'react';
import PropTypes from 'prop-types';


class EditFishForm extends React.Component{
    static propTypes = {
        fish: PropTypes.shape({
            image: PropTypes.string, 
            name: PropTypes.string,
            price: PropTypes.number,
            description: PropTypes.string,
            status: PropTypes.string
        }),
        index: PropTypes.string,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func
    }
    handleChange = event => {
        console.log(event.currentTarget.value);
        const updatedFish = {
            ...this.props.fish, 
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index, updatedFish);
    }

    render(){
        return <div className="fish-edit">
            <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name}></input>
            <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price}></input>
            <select  name="status">
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold out!</option>
            </select>
            <input type="text" name="desc" onChange={this.handleChange} value={this.props.fish.desc}></input>
            <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image}></input>
            <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
        </div>
    }
}

export default EditFishForm;