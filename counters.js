import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    
    
    render () {
        //console.log('Counters - Render');
        const { onReset, onDecrease, onIncrease, onDelete, counters } = this.props;
        return ( 
            <div>
                <div>
                    <button 
                        onClick = { onReset }
                        className = "btn btn-sm btn-primary m-4">Reset</button>
                </div>
                { counters.map((counter) => 
                    <Counter
                        key =  { counter.id } 
                        onDecrease = {  onDecrease }
                        onIncrease = {  onIncrease } 
                        onDelete = {  onDelete } 
                        counter = { counter }
                        >
                        <h4>Item #{counter.id}</h4>
                    </Counter>
                )}    
            </div>       
        )
    }
}

export default Counters;