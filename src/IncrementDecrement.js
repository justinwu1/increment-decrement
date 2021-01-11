import React from 'react';

class IncrementDecrement extends React.Component {
    constructor(props) {
        super(props)
        this.state = { num: this.props.num }
    }
    increase = () => {
        this.setState({ num: this.state.num + 1 })
    }
    decrease = () => {
        if(this.state.num === 0){
            alert("Number can't less than 0");
            return;
        }
        this.setState({num:this.state.num - 1})
    }
    render() {
        return (
            <div>
                <button type="button" onClick={this.increase}>Increment</button>
                <button type="button" onClick={this.decrease}>Decrement</button>
                <h1>{this.state.num}</h1>
            </div>
        )
    }
}
export default IncrementDecrement;