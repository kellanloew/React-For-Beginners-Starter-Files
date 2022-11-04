import React, { Fragment } from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {

    myInput = React.createRef()
    
    goToStore = (event) => {
        event.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    }
    componentDidMount(){
        console.log(this)
    }
    render(){
        return(
        <form class-name="store-selector" onSubmit={this.goToStore}>
            <h2>Enter a store:</h2>
            <input 
                type="text" 
                required 
                placeholder="Store name" 
                defaultValue={getFunName()}
                ref={this.myInput}
            />
            <button type="submit">Visit now</button>
        </form>
        )
    }
}

export default StorePicker;