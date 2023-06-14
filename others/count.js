import React from "react";
class Count extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // },
        // ()=>{
        //     console.log("Callback value", this.state.count)
        // })


        this.setState((prevstate)=>({
            count: prevstate.count + 1
            }))


    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render(){
        return(
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick = {()=>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Count;