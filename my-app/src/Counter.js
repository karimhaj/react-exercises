import React from 'react';

export default class Counter extends React.Component{

    state = {
        count: this.props.value
    }


    
    // componentDidMount(){
    //  setInterval(()=>{
    //     this.setState({
    //         count: this.state.count + this.props.incrementAmount
    //     })
    //  },this.props.incrementInterval)  
    // }

    handleCounterIncrement = () =>{
        this.setState(state=>{
            return {
                count: state.count + this.props.incrementAmount}
        })
    }


    render(){
        return (<div>
            <CounterDisplay count= {this.state.count} />
            <ClickCounter increment= {this.handleCounterIncrement}/>
        </div>
        )
    }
}

export class CounterDisplay extends React.Component{

    render(){
        return <h1>{this.props.count}</h1>
    }
}

export class ClickCounter extends React.Component{


render(){
    return <button onClick = {this.props.increment}>increment count</button>
}
}