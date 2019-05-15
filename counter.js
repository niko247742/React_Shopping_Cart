import React, { Component } from 'react';


class Counter extends Component {
    handleCount() {
        const { value } = this.props.counter;
           return value === 0 ? 'Zero' : value;
         }
    handleBadgeColor() {
        const { value } = this.props.counter;
        const styles = "p-2 m-2 badge badge-";
        return value === 0 ? styles + 'warning' : styles + 'primary';
    }
    
    render() {
        //console.log("Counter - rendered");
        return(
            <div className = "row">
                <div className = "col-2">
                    {this.props.children}

                </div>
                < div className = "col-1">
                    <span className = {this.handleBadgeColor()}>{this.handleCount()}</span>
                </div>
                <div className = "col">
                    <button 
                        className = 'btn btn-dark btn-sm m-2'
                        onClick = {() => this.props.onIncrease(this.props.counter)}>
                        +</button>
                    <button 
                        className = "btn btn-dark btn-sm m-2"
                        disabled = {this.props.counter.value === 0 ? true: false}
                        onClick = {() => this.props.onDecrease(this.props.counter)}>
                        -</button>

                    <button
                        onClick = {() => this.props.onDelete(this.props.counter.id)}
                        className = "btn btn-danger btn-sm m-2">
                        X</button>
                </div>

                
            </div>
                 

        )
    }
}

export default Counter;