import React from "react";

class Welcome extends React.Component {
    constructor(){
        super();
        this.state = {
            message: "Welcome visitor"
        }
    }
    changeMessage() {
        this.setState({
            message: "Thank you for subscribing"
        })
        
    }
    render() {
        //this.props.name = "John"; // This is not allowed
        return (
            <div>
                <h1> {this.state.message}</h1>
                <button onClick = {()=>this.changeMessage()}>Subscribe</button>
            </div> 
        )
    }
}
export default Welcome;