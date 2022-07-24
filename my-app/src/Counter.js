import React from 'react';

export default class Counter extends React.Component{

    state = {
        count: this.props.value
    }

    // constructor(props){
    //     super(props)

    //  setInterval(()=>{
    //     this.setState({
    //         count: this.state.count + this.props.incrementAmount
    //     })
    //  },this.props.incrementInterval)   
    // }

    componentDidMount(){
     setInterval(()=>{
        this.setState({
            count: this.state.count + this.props.incrementAmount
        })
     },this.props.incrementInterval)  
    }

    render(){
        return <CounterDisplay count= {this.state.count} />
    }
}

export class CounterDisplay extends React.Component{

    render(){
        return <h1>{this.props.count}</h1>
    }
}