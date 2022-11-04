import React from 'react';
import PropTypes from "prop-types";

export default class AddFishForm extends React.Component {
    static propTypes = {
        addFish: PropTypes.func
    }
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    
    createFish = (event) => {
        event.preventDefault(0);
        const fish = {
            name: this.nameRef.current.value,
            price: this.priceRef.current.value,
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value 
        }
        this.props.addFish(fish);
        event.currentTarget.reset();
    }
    
    render() {
        return(
           <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" type="text" placeholder="name" ref={this.nameRef}/>
                <input name="price" type="text" placeholder="Price" ref={this.priceRef}/>
                <select name="status" ref={this.statusRef}>
                    <option value="true">Fresh</option>
                    <option value="false">Sold out</option>
                </select>
                <textarea name="desc" type="text" placeholder="Desc" ref={this.descRef}/>
                <input name="image" type="text" placeholder="Image" ref={this.imageRef}/>
                <button type="submit">+ Add Fish</button>
           </form>
        );
    }
}